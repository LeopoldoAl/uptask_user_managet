import type { NewPasswordForm } from "../../types"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import ErrorMessage from "@/components/ErrorMessage"


export default function NewPasswordForm() {
    const navigate = useNavigate()
    const initialValues: NewPasswordForm = {
        password: '',
        password_confirmation: '',
    }
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues: initialValues })


    const handleNewPassword = (formData: NewPasswordForm) => {}

    const password = watch('password')

    return (
        <>
            <form
                onSubmit={handleSubmit(handleNewPassword)}
                className="space-y-8 p-10  bg-white mt-10"
                noValidate
            >

                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
                    >Password</label>

                    <input
                        type="password"
                        placeholder="Register's password"
                        className="w-full p-3  border-gray-300 border"
                        {...register("password", {
                            required: "The Password is obligatory!",
                            minLength: {
                                value: 8,
                                message: 'El Password debe ser mínimo de 8 caracteres'
                            }
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </div>

                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
                    >Repeat Password</label>

                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repeat register password"
                        className="w-full p-3  border-gray-300 border"
                        {...register("password_confirmation", {
                            required: "Password repeated is obligatory!o",
                            validate: value => value === password || 'The passwords are not equal'
                        })}
                    />

                    {errors.password_confirmation && (
                        <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    value='Establish Password'
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
                />
            </form>
        </>
    )
}