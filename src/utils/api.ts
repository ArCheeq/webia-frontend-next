import axios from "axios";
import { CONFIG } from "@/constants/config";

export const api = axios.create({
    baseURL: CONFIG.servers.api,
    timeout: 0,
    headers: {
        'ngrok-skip-browser-warning': true,
    }
});
