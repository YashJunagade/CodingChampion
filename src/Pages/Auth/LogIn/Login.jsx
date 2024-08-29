import React, { useState } from 'react';
import googleLogo from '../../../assets/google.png';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('User Logged in Successfully', {
        position: 'bottom-right',
      });
      navigate('/');
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          toast.error('No user found with this email. Please register first.', {
            position: 'bottom-center',
          });
          break;
        case 'auth/wrong-password':
          toast.error('Incorrect password. Please try again.', {
            position: 'bottom-center',
          });
          break;
        case 'auth/invalid-email':
          toast.error('Invalid email format. Please check your email.', {
            position: 'bottom-center',
          });
          break;
        case 'auth/invalid-credential':
          toast.error('Invalid credentials. Please try again.', {
            position: 'bottom-center',
          });
          break;
        default:
          toast.error(err.message, { position: 'bottom-center' });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('User Logged in Successfully with Google', {
        position: 'top-center',
      });
      navigate('/');
    } catch (err) {
      toast.error(err.message, { position: 'bottom-center' });
    } finally {
      setLoading(false);
    }
  };

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
  );
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
};

export default Login;
