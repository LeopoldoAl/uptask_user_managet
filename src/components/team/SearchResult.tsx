import { addUserToProject } from "@/api/TeamAPI"
import { TeamMember } from "@/types/index"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

type SearchResultProps = {
    user: TeamMember,
    reset: () => void
}
export default function SearchResult({ user, reset }: SearchResultProps) {
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!
    const clientQuery = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: addUserToProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
            navigate(location.pathname, {replace: true})
            clientQuery.invalidateQueries({queryKey: ['projectTeam', projectId]})
        }
    })

    const handleUserAddToProject = () => mutate({projectId, id: user._id})
    return (
        <>
            <p className="mt-10 text-center font-bold">Results</p>
            <div className="flex justify-between items-center">
                <p>{user.name}</p>
                <button
                    className="text-purple-600 hover:bg-purple-300 px-10 py-3 font-bold cursor-pointer"
                    onClick={handleUserAddToProject}
                >Add to the Project</button>
            </div>
        </>
    )
}
