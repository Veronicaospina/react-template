# React Template

Este proyecto es una plantilla de React personalizable.

## Ejecutar con Docker

Para ejecutar esta aplicación utilizando Docker, sigue estos pasos:

### 1. Construir la imagen

Ejecuta el siguiente comando en la raíz del proyecto para construir la imagen de Docker:

```bash
docker build -t react-template .
```

### 2. Ejecutar el contenedor

Una vez construida la imagen, puedes ejecutar el contenedor con el siguiente comando:

```bash
docker run -d -p 8080:80 --name mi-react-app react-template
```

Esto iniciará la aplicación en el puerto 8080. Puedes acceder a ella en tu navegador en:

[http://localhost:8080](http://localhost:8080)

### Comandos útiles

- **Detener el contenedor:**
  ```bash
  docker stop mi-react-app
  ```

- **Eliminar el contenedor:**
  ```bash
  docker rm mi-react-app
  ```

- **Eliminar la imagen:**
  ```bash
  docker rmi react-template
  ```
