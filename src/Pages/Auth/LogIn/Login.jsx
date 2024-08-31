import React, { useState } from 'react'
import googleLogo from '../../../assets/google.png'
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../../../config/firebase'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [resetPasswordEmail, setResetPasswordEmail] = useState('')
  const [resetPasswordMode, setResetPasswordMode] = useState(false)
  const navigate = useNavigate()

  const createOrUpdateUserDocument = async (user) => {
    const userDoc = doc(db, 'Users', user.uid)
    try {
      const userSnapshot = await getDoc(userDoc)
      if (!userSnapshot.exists()) {
        await setDoc(
          userDoc,
          {
            uid: user.uid,
            email: user.email,
            userName: user.displayName || user.email.split('@')[0],
          },
          { merge: true }
        )
      }
    } catch (error) {
      console.error('Error creating/updating user document:', error)
      throw error
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      await createOrUpdateUserDocument(userCredential.user)
      toast.success('User Logged in Successfully', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      navigate('/')
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          toast.error('No user found with this email. Please register first.', {
            position: 'bottom-right',
            autoClose: 3000,
          })
          break
        case 'auth/wrong-password':
          toast.error('Incorrect password. Please try again.', {
            position: 'bottom-right',
            autoClose: 3000,
          })
          break
        case 'auth/invalid-email':
          toast.error('Invalid email format. Please check your email.', {
            position: 'bottom-right',
            autoClose: 3000,
          })
          break
        case 'auth/invalid-credential':
          toast.error('Try again check email and password or register first', {
            position: 'bottom-right',
            autoClose: 3000,
          })
          break
        default:
          toast.error(err.message, {
            position: 'bottom-right',
            autoClose: 3000,
          })
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
      await createOrUpdateUserDocument(result.user)
      toast.success('User Logged in Successfully with Google', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      navigate('/')
    } catch (err) {
      toast.error(err.message, { position: 'bottom-right', autoClose: 3000 })
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordReset = async () => {
    setLoading(true)
    try {
      await sendPasswordResetEmail(auth, resetPasswordEmail)
      toast.success('Password reset email sent. Check your inbox.', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      setResetPasswordMode(false)
    } catch (err) {
      toast.error('Error sending password reset email. Please try again.', {
        position: 'bottom-right',
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={
          resetPasswordMode
            ? (e) => {
                e.preventDefault()
                handlePasswordReset()
              }
            : handleSubmit
        }
        className="bg-white p-8 rounded-lg shadow-lg w-96 text-center"
      >
        <h2 className="text-2xl font-semibold mb-6">
          {resetPasswordMode ? 'Reset Password' : 'Login'}
        </h2>

        {resetPasswordMode ? (
          <>
            <div className="mb-4">
              <label
                className="block text-left text-sm font-medium mb-1"
                htmlFor="reset-email"
              >
                Email address
              </label>
              <input
                type="email"
                id="reset-email"
                value={resetPasswordEmail}
                onChange={(e) => setResetPasswordEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full p-2 border rounded-md text-lg"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-blue-500'} transition`}
            >
              {loading ? 'Sending...' : 'Send Password Reset Email'}
            </button>

            <button
              type="button"
              onClick={() => setResetPasswordMode(false)}
              className="mt-4 text-blue-500"
            >
              Back to Login
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label
                className="block text-left text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full p-2 border rounded-md text-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-left text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-2 border rounded-md text-lg"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-blue-500'} transition`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="mt-4">
              <Link
                to="#"
                onClick={() => setResetPasswordMode(true)}
                className="text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </div>

            <div className="my-6 text-gray-600">--Or continue with--</div>

            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center w-full border rounded-md py-2 px-4"
            >
              <img
                src={googleLogo}
                alt="Google logo"
                className="w-6 h-6 mr-2"
              />
              <span className="text-lg">
                {loading ? 'Logging in...' : 'Login with Google'}
              </span>
            </button>
          </>
        )}
      </form>
    </div>
  )
}

export default Login
