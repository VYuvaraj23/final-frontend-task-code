import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router"

function CreateUserPage() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("")
    
  const API_URL=import.meta.env.REACT_APP_BACKEND_URL
  const FetchFunc = async (page,data) => {
    try {
      const response = await axios.post(`${API_URL}/${page}`,data)
  
      console.log("Create Successful:", response);
      toast.success("Create successful!")
    } catch (error) {
      console.error("Create Error:", error.response?.data?.message || error.message);
      toast.error( error.response?.data?.message || error.message)
    } finally {
      setName("")
      setEmail("")
      setPassword("")
    }
  };
  
  const SubmitHandle =async (e)=>{
    await e.preventDefault()
    const data ={name,email,password}
    console.log(data)
    await FetchFunc("signup",data)
    
   
  }
  return (
    <>
      <form onSubmit={SubmitHandle}>
      <h1>Signup</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <p>Login  <Link to="/"><span>click here</span></Link></p>
        <p>Forgot Password <Link to="/forgot-password"><span>click here</span></Link></p>
      </div>
    </>
  )
}

export default CreateUserPage