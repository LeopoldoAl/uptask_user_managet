import { updateProject } from "@/api/ProjectApi";
import ProjectForm from "@/components/projects/ProjectForm";
import { Project, ProjectFormData } from "@/types/index";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type EditProjectFormProps = {
    data: ProjectFormData,
    projectId: Project['_id']
}

export default function EditProjectForm({data, projectId}: EditProjectFormProps) {
        
        const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
            projectName: data.projectName,
            clientName: data.clientName,
            description: data.description
        }})

        const { mutate } = useMutation({
            mutationFn: updateProject,
            onError: () => {

            },
            onSuccess: () => {

            }
        })

        const handleForm = (formData: ProjectFormData) => {
            const data = {
                formData,
                projectId
            }
            mutate(data)
        }
  return (
    <>
        <div className="max-w-3xl mx-auto">
            <h1 
                className="text-5xl font-black"
            >
                Edit Projects
            </h1>
            <p
                className="text-2xl font-light text-gray-500 mt-5"
            >
                Fill out the next form to edit the project
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
                    value="Save Changes"
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
                />
            </form>
        </div>
    </>
  )
}
