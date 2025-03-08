import { Link } from "react-router"

function ErrorPage() {
  return (
    <>
      <div className="text-5xl font-extrabold text-center">Page Not Found <br /><br />404</div>
      <br /><br />
    <div>home page <Link to={'/'}><span>click here</span></Link></div>
    </>
  )
}

export default ErrorPage