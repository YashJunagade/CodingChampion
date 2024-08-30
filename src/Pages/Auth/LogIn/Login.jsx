import React, { useState } from 'react'
import googleLogo from '../../../assets/google.png'
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../../../config/firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
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
      toast.success('User Logged in Successfully', { position: 'bottom-right' })
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
          toast.error('Try again check email and password or register first', {
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
      await createOrUpdateUserDocument(result.user)
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 text-center"
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

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
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </div>

        <div className="my-6 text-gray-600">--Or continue with--</div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border rounded-md py-2 px-4"
        >
          <img src={googleLogo} alt="Google logo" className="w-6 h-6 mr-2" />
          <span className="text-lg">
            {loading ? 'Logging in...' : 'Login with Google'}
          </span>
        </button>
      </form>
    </div>
  )
}

export default Login
