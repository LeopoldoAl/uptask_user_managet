import { isAxiosError } from "axios"
import { UserProfieForm } from "../types"
import api from "@/lib/axios"

export async function updateProfile(formData: UserProfieForm) {
    try {
        const { data } = await api.put<string>(`auth/profile`, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}