import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определяем тип состояния
interface AuthState {
  isAuthenticated: boolean; // Флаг авторизации
  user: {
    id: string | null;
    name: string | null;
    token: string | null;
  };
}

// Начальное состояние
const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: null,
    name: null,
    token: null,
  },
};

// Создаем слайс
const authSlice = createSlice({
  name: 'auth', // Имя слайса
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ id: string; name: string; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Сохраняем данные пользователя
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        id: null,
        name: null,
        token: null,
      };
    },
  },
});

// Экспортируем действия (actions)
export const { login, logout } = authSlice.actions;

// Экспортируем редюсер
export default authSlice.reducer;