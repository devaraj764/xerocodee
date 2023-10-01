import axiosInstance from "../helpers/axiosInstance";

export type TLoginData = {
    email: string
    password: string
}

export type TSignupData = {
    email: string
    password: string
    firstName: string
    lastName: string
}

export const login = async (data: TLoginData) => {
    try {
        const res = await axiosInstance.post('/auth/login', data);
        return res.data;
    } catch (error: any) {
        throw new Error(error.response.data?.message || 'Internal Server Error')
    }
}

export const signup = async (data: TSignupData) => {
    try {
        await axiosInstance.post('/auth/signup', data)
    } catch (error: any) {
        throw new Error(error.response.data?.message || 'Internal Server Error')
    }
}