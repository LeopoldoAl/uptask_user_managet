import { getProjects } from "@/api/ProjectApi"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"


export default function DashboardView() {
  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })

if(isLoading) return 'Loading...'
  if(data) return (
    <>
        <h1 
            className="text-5xl font-black"
        >
          My Projects
        </h1>
        <p
            className="text-2xl font-light text-gray-500 mt-5"
        >
          Manage your projects
        </p>
        <nav className="my-5">
          <Link
              className="bg-purple-400
              hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
              to="/projects/create"
          >
            New Project
          </Link>
        </nav>
        {data.length ? (
          <p>There are projects</p>
        ) : (
          <p
            className="text-center py-20"
          >
            There are not any project yet! {''}
            <Link 
              className="text-fuchsia-500 font-bold"
              to="/projects/create"
            >
              Create Project</Link>
          </p>
        )}
    </>
  )
}
