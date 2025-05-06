import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Тип состояния
interface AuthState {
  isAuthenticated: boolean
  user: {
    id: string | null
    name: string | null
    role: string | null
    token: string | null
  }
}

// Функция для загрузки начального состояния из localStorage
const loadInitialState = (): AuthState => {
  try {
    const serializedState = localStorage.getItem('auth')
    if (serializedState === null) return initialState
    return JSON.parse(serializedState)
  } catch (error) {
    console.error('Ошибка загрузки данных из localStorage:', error)
    return initialState
  }
}

// Начальное состояние (с возможностью восстановления из localStorage)
const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: null,
    name: null,
    role: null,
    token: null
  }
}

// Создаем слайс
const authSlice = createSlice({
  name: 'auth',
  initialState: loadInitialState(), // Используем восстановленное состояние
  reducers: {
    // Авторизация
    login: (state, action: PayloadAction<{ id: string; name: string; token: string; role: string }>) => {
      state.isAuthenticated = true
      state.user = action.payload
      // Сохраняем в localStorage
      localStorage.setItem('auth', JSON.stringify(state))
    },
    
    // Выход
    logout: (state) => {
      state.isAuthenticated = false
      state.user = {
        id: null,
        name: null,
        role: null,
        token: null
      }
      // Удаляем из localStorage
      localStorage.removeItem('auth')
    }
  }
})

// Экспортируем действия и редьюсер
export const { login, logout } = authSlice.actions
export default authSlice.reducer