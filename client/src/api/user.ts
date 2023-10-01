import axios from "axios";
import axiosInstance from "../helpers/axiosInstance";
const URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api'

type TUpdateUser = {
    role?: {
        designation: string
        name?: string
    },
    hostingPlan?: string
}

export const getUser = async () => {
    try {
        const token = localStorage.getItem('token')

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };

        const res = await axios.get(URL + `/user`, { headers });
        return res.data;
    } catch (error: any) {
        throw new Error(error.response.data?.message || 'Internal Server Error')
    }
}

export const updateUser = async (data: TUpdateUser) => {
    try {
        const res = await axiosInstance.patch('/user/update', data);
        return res.data;
    } catch (error: any) {
        throw new Error(error.response.data?.message || 'Internal Server Error');
    }
}