import axios from "axios";
import { env } from "@/shared/config/env";

class ApiClient {
    private static instance = axios.create({
        baseURL: env.API_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    static getInstance() {
        return this.instance;
    }
}

export const apiClient = ApiClient.getInstance();

apiClient.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});