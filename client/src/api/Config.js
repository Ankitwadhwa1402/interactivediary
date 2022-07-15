import axios from "axios";
export const axiosInstance=axios.create({
    baseURL: "https://interactivediary.herokuapp.com/"
});