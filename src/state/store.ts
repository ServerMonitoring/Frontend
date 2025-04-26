import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authslice';

// Создаем хранилище
const store = configureStore({
  reducer: {
    auth: authReducer, // Подключаем редюсер авторизации
  },
});

// Определяем тип состояния и диспетчера
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;