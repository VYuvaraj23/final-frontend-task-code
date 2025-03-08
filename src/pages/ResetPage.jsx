import axios, { AxiosHeaders } from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import {  useNavigate, useParams } from "react-router"

function ResetPage() {
  const [password,setPassword]=useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { token } = useParams()  
  const navigate=useNavigate()
  
  const API_URL=import.meta.env.REACT_APP_BACKEND_URL
  const FetchFunc = async (page,{password},token) => {
    try {
    await axios.put(`${API_URL}/${page}`, {password},{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      })
  
      console.log("Password successfully changed!");
      toast.success("Password successfully changed!")
      
    } catch (error) {
      console.error( error.response?.data?.message || error.message);
      toast.error( error.response?.data?.message || error.message)
    }finally {
      setPassword("")
      setConfirmPassword("")
      setTimeout(() => {
        navigate("/")
      },1000)
    }
  };


  const SubmitHandle = async(e)=>{
    await e.preventDefault()
    if (password === confirmPassword) {
      console.log(token )
      await FetchFunc("reset-password", { password }, token)
      
      
    } else {
      toast.error("password miss match")
    }
  }  
  return (
    <>
      <form onSubmit={SubmitHandle}>
        <h1>Reset Password</h1>
        <label htmlFor="password">Password :</label>
        <input type="text" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}required/>
        <label htmlFor="confirm-password">Confirm Password :</label>

        <input type="password" id="confirm-password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
        <input type="submit" value="save" />

    </form>
    </>

  )
}

export default ResetPage