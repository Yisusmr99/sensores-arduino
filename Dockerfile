# Usar la imagen oficial de Node.js para construir la aplicación
FROM node:18-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todos los archivos del proyecto
COPY . .

# Construir la aplicación de Angular/Ionic
RUN npm run build

# Usar Nginx para servir la aplicación en el contenedor final
FROM nginx:alpine

# Copiar los archivos generados en el build del paso anterior a Nginx
COPY --from=build /app/www /usr/share/nginx/html

# Exponer el puerto 80 para el servicio de Nginx
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]