import axios from "axios";
import { CONFIG } from "@/constants/config";

export const api = axios.create({
    baseURL: CONFIG.servers.api,
    headers: {
        'ngrok-skip-browser-warning': true,
    }
});
