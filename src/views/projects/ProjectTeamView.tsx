import { Link, useNavigate, useParams } from "react-router-dom"


export default function ProjectTeamView() {
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!
    return (
        <>
            <h1 className="text-5xl font-black">Administrate Team</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">Management the work team for this project</p>

            <nav className="my-5 flex gap-3">
                <button
                    className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                    type="button"
                    onClick={() => navigate(location.pathname + '?addMember=true')}
                >
                    Add Collaborator
                </button>
                <Link
                    to={`/projects/${projectId}`}
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                >
                    Go to Project
                </Link>
            </nav>
        </>
    )
}
