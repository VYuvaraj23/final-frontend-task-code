import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router"

function ForgotPasswordPage() {
const [email,setEmail] =useState("")
  const API_URL=import.meta.env.REACT_APP_BACKEND_URL
  const FetchFunc = async (page,data) => {
    try {
      await axios.post(`${API_URL}/${page}`,data)
  
      console.log("Link send Your Email Successful");
      toast.success("Link send Your Email Successful!")
      // sessionStorage.setItem("token", response.data.token); // Save token
    } catch (error) {
      console.error("Invalid Email Error:", error.response?.data?.message || error.message);
      toast.error( error.response?.data?.message || error.message)
    }
  };

  const SubmitHandle =async (e)=>{
    await e.preventDefault()
    await FetchFunc("forgot-password",{email})

  }
  return (
    <>
      <form onSubmit={SubmitHandle}>
        <h1>Forgot Password</h1>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
    <input type="submit" value="Send Reset Link" />
      </form>
      <div>
        <p>Register to <Link to="/signup"><span>click here</span></Link></p>
        <p>Login <Link to="/"><span>click here</span></Link></p>
      </div>
    </>
  )
}

export default ForgotPasswordPage