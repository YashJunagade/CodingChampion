import React, { useState } from 'react'
import googleLogo from '../../../assets/google.png'
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../../../config/firebase' // Updated to include Firestore
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      // Check if user data exists in Firestore
      const userDoc = await getDoc(doc(db, 'Users', user.uid))
      if (!userDoc.exists()) {
        // No existing data, save user data to Firestore
        await setDoc(doc(db, 'Users', user.uid), {
          uid: user.uid,
          email: user.email,
          name: user.displayName || '', // User might not have a displayName with email/password login
          profilePic: user.photoURL || '', // Profile pic will be empty initially for email/password
        })
      }

      toast.success('User Logged in Successfully', {
        position: 'bottom-right',
      })
      navigate('/')
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          toast.error('No user found with this email. Please register first.', {
            position: 'bottom-center',
          })
          break
        case 'auth/wrong-password':
          toast.error('Incorrect password. Please try again.', {
            position: 'bottom-center',
          })
          break
        case 'auth/invalid-email':
          toast.error('Invalid email format. Please check your email.', {
            position: 'bottom-center',
          })
          break
        case 'auth/invalid-credential':
          toast.error('Invalid credentials. Please try again.', {
            position: 'bottom-center',
          })
          break
        default:
          toast.error(err.message, { position: 'bottom-center' })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user) // Correct way to log the user object

      // Save user data to Firestore
      await setDoc(
        doc(db, 'Users', user.uid),
        {
          uid: user.uid,
          userName: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
        },
        { merge: true }
      ) // Use merge to update existing data if any

      toast.success('User Logged in Successfully with Google', {
        position: 'top-center',
      })
      navigate('/')
    } catch (err) {
      toast.error(err.message, { position: 'bottom-center' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
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
            placeholder="Enter password"
            style={styles.input}
            required
          />
        </div>

        <button
          type="submit"
          style={styles.submitButton}
          disabled={loading ? true : false}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div style={styles.registerLink}>
          New user? <a href="/register">Register Here</a>
        </div>

        <div style={styles.orContinue}>--Or continue with--</div>

        <button
          type="button"
          style={styles.googleButton}
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <img src={googleLogo} alt="Google logo" style={styles.googleIcon} />
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
    width: '500px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
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
  },
  registerLink: {
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
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontSize: '16px',
  },
  googleIcon: {
    marginRight: '10px',
  },
}

export default Login
