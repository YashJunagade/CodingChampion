import React, { useState } from "react"
import googleLogo from "../../../assets/google.png"
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
import { auth, db } from "../../../config/firebase"
import { setDoc, doc, getDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const createUserDocument = async (user) => {
    const userDoc = doc(db, "Users", user.uid)
    try {
      const userSnapshot = await getDoc(userDoc)
      if (!userSnapshot.exists()) {
        await setDoc(
          userDoc,
          {
            uid: user.uid,
            email: user.email,
            userName: user.displayName || user.email.split("@")[0],
          },
          { merge: true }
        )
      }
    } catch (error) {
      console.error("Error creating user document:", error)
      throw error
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await createUserDocument(userCredential.user)
      toast.success("User Registered Successfully! Now logging you in...", {
        position: "bottom-right",
        autoClose: 3000,
      })
      navigate("/")
    } catch (error) {
      console.error("Registration Error:", error)
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      await createUserDocument(result.user)
      toast.success("User Registered Successfully! Now logging you in...", {
        position: "bottom-right",
        autoClose: 3000,
      })
      navigate("/")
    } catch (error) {
      console.error("Google Sign-In Error:", error)
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleRegister}
        className='bg-white p-8 rounded-lg shadow-lg w-96 text-center'
      >
        <h2 className='text-2xl font-semibold mb-6'>Sign Up</h2>

        <div className='mb-4'>
          <label
            className='block text-left text-sm font-medium mb-1'
            htmlFor='email'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            className='w-full p-2 border rounded-md text-lg'
            required
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-left text-sm font-medium mb-1'
            htmlFor='password'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            className='w-full p-2 border rounded-md text-lg'
            required
          />
        </div>

        <button
          type='submit'
          className={`w-full py-2 rounded-md text-white ${loading ? "bg-gray-500" : "bg-blue-500"} transition`}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <div className='mt-4'>
          Already registered?{" "}
          <Link to='/login' className='text-blue-500'>
            Login
          </Link>
        </div>

        <div className='my-6 text-gray-600'>--Or continue with--</div>

        <button
          onClick={handleGoogleSignIn}
          className='flex items-center justify-center w-full border rounded-md py-2 px-4'
        >
          <img src={googleLogo} alt='Google logo' className='w-6 h-6 mr-2' />
          <span className='text-lg'>
            {loading ? "Signing in..." : "Sign in with Google"}
          </span>
        </button>
      </form>
    </div>
  )
}

export default Register
