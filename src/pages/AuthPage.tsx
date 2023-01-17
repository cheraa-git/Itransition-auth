import SignInIcon from '../assets/signin_orange.svg'
import UserPlusIcon from '../assets/user-plus_orange.svg'
import { Button } from "../components/UI/Button"
import { Input } from "../components/UI/Input"
import { Link, useParams } from "react-router-dom"


export function AuthPage() {
  const params = useParams()

  const LoginContent = () => (
    <>
      <div className="text-center mb-4">
        <img src={SignInIcon} alt="sigin" className="w-7 mx-auto mb-4"/>
        <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
        <p className="text-gray-400">Sign in to your account</p>
      </div>

      <Input label="E-mail"/>
      <Input label="Password"/>

      <Button>Login</Button>

      <div className="flex mt-4">
        <p>Don`t have an account?</p>
        <Link className="text-orange-600 ml-2" to="/auth/signup">Sign up!</Link>
      </div>
    </>
  )

  const SignUpContent = () => (
    <>
      <div className="text-center mb-4">
        <img src={UserPlusIcon} alt="create-account" className="w-7 mx-auto mb-4"/>
        <h1 className="text-3xl font-bold mb-2">Create Account!</h1>
      </div>

      <Input label="E-mail"/>
      <Input label="Password"/>
      <Input label="Confirm your password"/>

      <Button>Create</Button>
      <div className="flex mt-4">
        <p>Already have an account?</p>
        <Link className="text-orange-600 ml-2" to="/auth/login">Login!</Link>
      </div>
    </>
  )

  return (
    <div className="bg-white w-min p-7 mx-auto mt-16 rounded">
      {params.mode === 'signup' ? <SignUpContent/> : <LoginContent/>}
    </div>


  )
}
