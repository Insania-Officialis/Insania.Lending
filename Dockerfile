#Использование образа 20 Node.js
FROM node:20-bookworm as builder

#Задание рабочего каталога
WORKDIR /app

#Копирование пакетов
COPY package*.json ./

#Установка зависимостей
RUN npm ci

#Копирование файлов проекта
COPY . .

#Сборка приложения
RUN npm run build

#Использование образа для финальных действий
FROM nginx:bookworm

#Копирование собранных файлов из builder-стадии
COPY --from=builder /app/build /usr/share/nginx/html

#Проброс порта
EXPOSE 80

#Запуск nginx
CMD ["nginx", "-g", "daemon off;"]