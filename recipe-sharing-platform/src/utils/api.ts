import axios from "axios"

const API_URL = "http://localhost:5000/api"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password })
  return response.data
}

export const register = async (username: string, email: string, password: string) => {
  const response = await api.post("/auth/register", { username, email, password })
  return response.data
}

export const createRecipe = async (recipeData: FormData) => {
  const response = await api.post("/recipes", recipeData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}

export const getRecipes = async () => {
  const response = await api.get("/recipes")
  return response.data
}

export default api

