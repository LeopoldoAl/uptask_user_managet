import NewPasswordToken from "@/components/auth/NewPasswordToken"
import NewPasswordForm from "@/components/auth/NewPasswordForm"
import { useState } from "react"


export default function NewPasswordView() {
  const [ isValidToken, setIsValidToken] = useState(false)
  return (
    <>
      <h1 className="text-5xl font-black text-white">Restore Password</h1>
      <p className="text-2xl font-light text-white mt-5">
        Ingress the code that you has received {''}
        <span className=" text-fuchsia-500 font-bold"> by email</span>
      </p>
      {!isValidToken ? <NewPasswordToken/>: <NewPasswordForm/>}
    </>
  )
}
