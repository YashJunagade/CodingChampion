import React, { useState } from 'react'
import googleLogo from '../../../assets/google.png'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth, db } from '../../../config/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          userName: user.email.split('@')[0], // Default userName based on email
          profilePic: `${Math.floor(Math.random() * 11) + 1}.jpeg`, // Empty until the user updates it
        })
      }

      toast.success('User Registered Successfully! Now logging you in...', {
        position: 'bottom-right',
      })
      navigate('/')
    } catch (error) {
      console.error('Registration Error:', error)
      toast.error(error.message, {
        position: 'bottom-center',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          userName: user.displayName,
          profilePic: `${Math.floor(Math.random() * 11) + 1}.jpeg`,
        })
      }

      toast.success('User Registered Successfully! Now logging you in...', {
        position: 'bottom-right',
      })
      navigate('/')
    } catch (error) {
      console.error('Google Sign-In Error:', error)
      toast.error(error.message, {
        position: 'bottom-center',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>

        <div style={styles.loginLink}>
          Already registered? <a href="/login">Login</a>
        </div>

        <div style={styles.orContinue}>--Or continue with--</div>

        <button style={styles.googleButton} onClick={handleGoogleSignIn}>
          <img src={googleLogo} alt="Google logo" style={styles.googleIcon} />
          <span style={styles.googleText}>
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </span>
        </button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    textAlign: 'left',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '10px',
  },
  loginLink: {
    fontSize: '14px',
    marginTop: '10px',
  },
  orContinue: {
    margin: '20px 0',
    fontSize: '14px',
    color: '#666',
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontSize: '16px',
  },
  googleIcon: {
    width: '20px',
    marginRight: '10px',
  },
  googleText: {
    fontSize: '16px',
  },
}

export default Register
