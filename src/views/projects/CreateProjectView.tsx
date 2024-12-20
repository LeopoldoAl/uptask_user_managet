import { createProject } from "@/api/ProjectApi"
import ProjectForm from "@/components/projects/ProjectForm"
import { ProjectFormData } from "@/types/index"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function CreateProjectView() {
    const navigate = useNavigate()
    const initialValues: ProjectFormData = {
        projectName: "",
        clientName: "",
        description: ""
    }
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})
    const mutation = useMutation({
        mutationFn: createProject,
        onError: () => {

        },
        onSuccess: (formData) => {
            toast.success(formData)
            navigate('/')
        }
    })
    const handleForm =  (data: ProjectFormData) => {
        mutation.mutate(data) 
    }
  return (
    <>
        <div className="max-w-3xl mx-auto">
            <h1 
                className="text-5xl font-black"
            >
                Create Projects
            </h1>
            <p
                className="text-2xl font-light text-gray-500 mt-5"
            >
                Fill out the next form to create a project
            </p>
            <nav className="my-5">
                <Link
                    className="bg-purple-400
                    hover:bg-purple-500 px-10 py-3 
                    text-white text-xl font-bold cursor-pointer transition-colors"
                    to="/"
                >
                    Back to Project
                </Link>
            </nav>
            <form
                className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                onSubmit={handleSubmit(handleForm)}
                noValidate
            >
                <ProjectForm
                    register={register}
                    errors={errors}
                />
                <input 
                    type="submit" 
                    value="Create Project"
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
                />
            </form>
        </div>
    </>
  )
}
