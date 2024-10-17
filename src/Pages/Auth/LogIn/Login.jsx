import React, { useState } from 'react'
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../../../config/firebase'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
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
      toast.error(err.message, {
        position: 'bottom-right',
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGithubSignIn = async () => {
    setLoading(true)
    try {
      const provider = new GithubAuthProvider()
      const result = await signInWithPopup(auth, provider)
      await createOrUpdateUserDocument(result.user)
      toast.success('User Logged in Successfully with GitHub', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      navigate('/')
    } catch (err) {
      toast.error(err.message, {
        position: 'bottom-right',
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen -mt-14 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        {/* Added notice about authentication methods */}
        <div className="bg-blue-50 p-3 rounded-md mb-6">
          <p className="text-blue-800 text-sm">
            We now support login exclusively through Google and GitHub for
            enhanced security. If you previously used email/password, please
            sign in with either service below.
          </p>
        </div>

        <button
          onClick={handleGithubSignIn}
          className="flex items-center justify-center w-full border rounded-md py-2 px-4 mb-4 bg-gray-800 text-white hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg">
            {loading ? 'Logging in...' : 'Login with GitHub'}
          </span>
        </button>

        <div className="my-6 text-gray-600">----- Or -----</div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border rounded-md py-2 px-4 hover:bg-gray-50"
        >
          <img
            src="https://res.cloudinary.com/yashjunagade/image/upload/v1725686275/googleLogo_yhe7ju.png"
            alt="Google logo"
            className="w-6 h-6 mr-2"
          />
          <span className="text-lg">
            {loading ? 'Logging in...' : 'Login with Google'}
          </span>
        </button>

        <div className="mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 font-bold text-md">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
