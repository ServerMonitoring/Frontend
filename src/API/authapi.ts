import { api } from "./config"
import axios, { AxiosInstance, AxiosError } from 'axios';

// Определение интерфейсов
interface SignUpRequest {
  name: string;
  surname: string;
  patronymic: string;
  department: string;
  position: string;
  login: string;
  password: string;
  role: 'USER' | 'ADMIN';
  addInfo: string;
}

interface SignInRequest {
  login: string;
  password: string;
}

interface SignUpResponse {
  message: string;
}

interface SignInResponse {
  token: string;
}

// Создание экземпляра Axios
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com ',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функция регистрации
async function signUp(userData: SignUpRequest): Promise<SignUpResponse> {
  try {
    const response = await apiClient.post<SignUpResponse>('/auth/sign_up', userData);
    return response.data;
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    throw error;
  }
}

// Функция входа
async function signIn(credentials: SignInRequest): Promise<SignInResponse> {
  try {
    const response = await apiClient.post<SignInResponse>('/auth/sign_in', credentials);
    return response.data;
  } catch (error) {
    console.error('Ошибка при входе:', error);
    throw error;
  }
}

export { signUp, signIn };