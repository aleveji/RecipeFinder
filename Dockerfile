#Selecciono la imagen base
FROM node:12.18.4-alpine

#Establezco el directorio de trabajo
WORKDIR /test

#Copio el archivo de dependencias
COPY package*.json ./

#Instalo las dependencias y el modulo "make"
RUN npm install
RUN npm install make -g

#Copio los archivos (incluyendo el "Makefile")
COPY . .

#Establezco como usuario "node", el usuario por
#defecto que no tiene privilegios de administrador
USER node

#Ejecuto los test del proyecto
CMD [ "make", "run-test" ]