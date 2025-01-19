import { Project, TeamMember } from "../types"

export const isManager = (manageId: Project['manager'], usrId: TeamMember['_id']) => manageId===usrId