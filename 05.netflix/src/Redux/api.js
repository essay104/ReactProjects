import axios from "axios";

// axios 인스턴스 생성

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-Type": "application.json" },
})

export default api