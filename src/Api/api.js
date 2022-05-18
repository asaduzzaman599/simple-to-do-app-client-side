import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://todo-app-asaduzzaman599.herokuapp.com/",
});

export default axiosInstance;