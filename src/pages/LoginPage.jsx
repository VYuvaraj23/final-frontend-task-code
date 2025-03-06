import {  useState } from "react"
import { Link } from "react-router"
import toast from "react-hot-toast"
import axios from "axios"


function LoginPage() {
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("")
  
  const API_URL=import.meta.env.REACT_APP_BACKEND_URL
  const FetchFunc = async (page,data) => {
    try {
      const response = await axios.post(`${API_URL}/${page}`,data)
  
      console.log("Login Successful:", response);
      toast.success("Login successful!")
      
    } catch (error) {
      console.error("Login Error:", error.response?.data?.message || error.message);
      toast.error( error.response?.data?.message || error.message)
    }
  };
  
  const SubmitHandle =async (e)=>{
    await e.preventDefault()
    const data = {email,password}
    await FetchFunc("signin",data)
    
  }

  return (
    <>
      <form onSubmit={SubmitHandle}>
      <h1>Login</h1>
        
        <label htmlFor="email">E-mail :</label>
        <input type="email" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
        <input type="submit" value="Login" />
      </form>
      <div>
        <p>Register to <Link to="/signup"><span>click here</span></Link></p>
        <p>Forgot Password <Link to="/forgot-password"><span>click here</span></Link></p>
      </div>
    </>
  )
}

export default LoginPage