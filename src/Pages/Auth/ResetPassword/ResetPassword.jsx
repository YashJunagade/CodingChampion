import React, { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import {
  getAuth,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth"
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash } from "react-icons/fa"

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [actionCode, setActionCode] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const code = searchParams.get("oobCode")
    if (code) {
      setActionCode(code)
      const auth = getAuth()
      verifyPasswordResetCode(auth, code)
        .then(() => {})
        .catch((error) => {
          console.error("Error verifying password reset code:", error)
          toast.error("Invalid or expired password reset link.", {
            position: "bottom-right",
            autoClose: 3000,
          })
          navigate("/login")
        })
    } else {
      toast.error("No reset code found in the URL.", {
        position: "bottom-right",
        autoClose: 3000,
      })
      navigate("/login")
    }
  }, [searchParams, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "bottom-right",
        autoClose: 3000,
      })
      return
    }
    setLoading(true)
    try {
      const auth = getAuth()
      await confirmPasswordReset(auth, actionCode, newPassword)
      toast.success("Password has been reset successfully.", {
        position: "bottom-right",
        autoClose: 3000,
      })
      navigate("/login")
    } catch (error) {
      console.error("Error resetting password:", error)
      toast.error("Error resetting password. Please try again.", {
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
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-lg shadow-lg w-96 text-center'
      >
        <h2 className='text-2xl font-semibold mb-6'>Reset Password</h2>

        <div className='mb-4 relative'>
          <label
            className='block text-left text-sm font-medium mb-1'
            htmlFor='new-password'
          >
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id='new-password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='Enter new password'
            className='w-full p-2 border rounded-md text-lg'
            required
          />
          <span
            className='absolute right-3 top-9 cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className='mb-6 relative'>
          <label
            className='block text-left text-sm font-medium mb-1'
            htmlFor='confirm-password'
          >
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id='confirm-password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm new password'
            className='w-full p-2 border rounded-md text-lg'
            required
          />
          <span
            className='absolute right-3 top-9 cursor-pointer'
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          type='submit'
          className={`w-full py-2 rounded-md text-white ${
            loading ? "bg-gray-500" : "bg-blue-500"
          } transition`}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  )
}

export default ResetPassword
