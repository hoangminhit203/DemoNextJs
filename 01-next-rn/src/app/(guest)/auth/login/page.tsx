import { auth } from "@/auth"
import Login from "@/auth/login"

const LoginPage = async () => {
  const session = await auth()
  console.log("check session 000", session)
  return <Login />
}

export default LoginPage
