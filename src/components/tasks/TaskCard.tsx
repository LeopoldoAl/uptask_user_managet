import { deleteTask } from "@/api/TaskAPI"
import { TaskProject } from "@/types/index"
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Menu, Transition } from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Fragment } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

type TaskCardProps = {
    task: TaskProject,
    canEdit: boolean
}

export default function TaskCard({ task, canEdit }: TaskCardProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task._id
    })
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: deleteTask,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({ queryKey: ['editProject', projectId] })
            navigate(location.pathname, { replace: true })
        }
    })

    const style = {
        transform: CSS.Translate.toString(transform),
    }
    return (
        <li
            ref={setNodeRef}
            style={style}
            className="p-5 bg-white border border-slate-300 flex justify-between gap-3 transition-all"
        >
            <div
                className="min-w-0 flex flex-col gap-y-4"
            >
                <button
                    className="text-xl font-bold text-slate-600 text-left"
                    type="button"
                    onClick={() => navigate(location.pathname + `?viewTask=${task._id}`)}
                >
                    {task.name}
                </button>
                <p
                    {...listeners}
                    {...attributes}
                    className="text-slate-500 cursor-move"
                >
                    {task.description}
                </p>
            </div>
            <div className="flex shrink-0  gap-x-6">
                <Menu as="div" className="relative flex-none">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                        <span className="sr-only">options</span>
                        <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
                    </Menu.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <Menu.Item>
                                <button
                                    type='button'
                                    className='block px-3 py-1 text-sm leading-6 text-gray-900'
                                    onClick={() => navigate(location.pathname + `?viewTask=${task._id}`)}
                                >
                                    See Task
                                </button>
                            </Menu.Item>
                            {canEdit && (
                                <>
                                    <Menu.Item>
                                        <button
                                            type='button'
                                            className='block px-3 py-1 text-sm leading-6 text-gray-900'
                                            onClick={() => navigate(location.pathname + `?editTask=${task._id}`)}
                                        >
                                            Edit Task
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <button
                                            type='button'
                                            className='block px-3 py-1 text-sm leading-6 text-red-500'
                                            onClick={() => mutate({ projectId, taskId: task._id })}
                                        >
                                            Delete Task
                                        </button>
                                    </Menu.Item>
                                </>
                            )}
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </li>
    )
}
