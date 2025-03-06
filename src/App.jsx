import { BrowserRouter, Route, Routes } from "react-router"
import ForgotPasswordPage from "./pages/forgotPasswordPage"
import LoginPage from "./pages/LoginPage"
import CreateUserPage from "./pages/CreateUserPage"
import ResetPage from "./pages/ResetPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<CreateUserPage/>} />
        <Route path="/forgot-password" element={ <ForgotPasswordPage/>} />
        <Route path="/reset-password/:token" element={ <ResetPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App