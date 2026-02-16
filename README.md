# 🎵 Album Manager - Sistema de Gestión de Álbumes Musicales

Una aplicación web full-stack para gestionar una colección de álbumes musicales con autenticación de usuarios.

## 📋 Descripción

Album Manager es una aplicación CRUD (Create, Read, Update, Delete) que permite a los usuarios registrados administrar una colección de álbumes musicales. La aplicación cuenta con un sistema de autenticación basado en JWT y una interfaz moderna y responsive.

## 🚀 Características

- **Autenticación de usuarios**: Registro e inicio de sesión con JWT
- **Gestión de álbumes**: Crear, ver, editar y eliminar álbumes
- **Interfaz responsive**: Diseño adaptable a dispositivos móviles y desktop
- **API RESTful**: Backend con endpoints bien estructurados
- **Filtros y paginación**: Búsqueda de álbumes por género, artista y año

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT (jsonwebtoken)** - Autenticación basada en tokens
- **bcryptjs** - Encriptación de contraseñas

### Frontend
- **HTML5** - Estructura
- **CSS3** - Estilos con diseño responsive
- **JavaScript (Vanilla)** - Lógica del cliente

## 📁 Estructura del Proyecto

```
actividad 4/
├── public/                    # Frontend estático
│   ├── css/
│   │   └── styles.css        # Estilos globales
│   ├── js/
│   │   ├── index.js          # Lógica de lista de álbumes
│   │   ├── create.js         # Lógica de creación
│   │   ├── edit.js           # Lógica de edición
│   │   ├── login.js          # Lógica de login
│   │   └── register.js       # Lógica de registro
│   ├── index.html            # Página principal (lista de álbumes)
│   ├── create.html           # Formulario de creación
│   ├── edit.html             # Formulario de edición
│   ├── login.html            # Página de login
│   └── register.html         # Página de registro
├── src/
│   ├── config/
│   │   └── database.js       # Configuración de MongoDB
│   ├── controllers/
│   │   ├── albumController.js    # Controlador de álbumes
│   │   └── authControllers.js    # Controlador de autenticación
│   ├── middlewares/
│   │   └── authMiddleware.js     # Middleware de autenticación JWT
│   ├── models/
│   │   ├── Album.js          # Modelo de álbum
│   │   └── User.js           # Modelo de usuario
│   ├── routes/
│   │   ├── albumRoutes.js    # Rutas de álbumes
│   │   └── authRoutes.js     # Rutas de autenticación
│   └── app.js                # Configuración de Express
├── server.js                 # Punto de entrada
├── .env                      # Variables de entorno
├── package.json              # Dependencias
└── README.md                 # Documentación
```

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd "actividad 4"
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/albums_db
   JWT_SECRET=tu_clave_secreta_aqui
   ```

4. **Iniciar el servidor**
   ```bash
   npm start
   ```

5. **Acceder a la aplicación**
   
   Abrir en el navegador: `http://localhost:3000`

## 📡 API Endpoints

### Autenticación

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Registrar nuevo usuario | No |
| POST | `/api/auth/login` | Iniciar sesión | No |

### Álbumes

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/albums` | Obtener todos los álbumes | No |
| GET | `/api/albums/:id` | Obtener álbum por ID | No |
| POST | `/api/albums` | Crear nuevo álbum | Sí (JWT) |
| PUT | `/api/albums/:id` | Actualizar álbum | Sí (JWT) |
| DELETE | `/api/albums/:id` | Eliminar álbum | Sí (JWT) |

### Parámetros de consulta (GET /api/albums)

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `genre` | string | Filtrar por género |
| `artist` | string | Filtrar por artista |
| `year` | number | Filtrar por año |
| `sort` | string | Ordenar por campo (default: createdAt) |
| `page` | number | Número de página (default: 1) |
| `limit` | number | Resultados por página (default: 5) |

## 📊 Modelos de Datos

### Usuario (User)
```javascript
{
  name: String,      // Nombre del usuario (requerido)
  email: String,     // Email único (requerido)
  password: String,  // Contraseña encriptada (requerido)
  createdAt: Date,   // Fecha de creación
  updatedAt: Date    // Fecha de actualización
}
```

### Álbum (Album)
```javascript
{
  title: String,     // Título del álbum (requerido)
  artist: String,    // Nombre del artista (requerido)
  genre: String,     // Género musical (requerido)
  year: Number,      // Año de lanzamiento (requerido)
  price: Number,     // Precio (requerido)
  stock: Number,     // Stock disponible (default: 0)
  createdAt: Date,   // Fecha de creación
  updatedAt: Date    // Fecha de actualización
}
```

## 🎨 Paleta de Colores

| Elemento | Color | Código |
|----------|-------|--------|
| Fondo | Azul oscuro | `#0F0F1A` |
| Tarjetas | Gris oscuro | `#1C1C2E` |
| Color principal | Morado | `#7C3AED` |
| Hover botones | Morado oscuro | `#6D28D9` |
| Texto | Blanco grisáceo | `#F3F4F6` |

## 🔐 Seguridad

- Las contraseñas se encriptan con **bcrypt** antes de almacenarse
- La autenticación utiliza **JWT** con expiración de 1 hora
- Las rutas de creación, edición y eliminación están protegidas
- Validación de IDs de MongoDB antes de operaciones

## 📱 Responsive Design

La aplicación es completamente responsive con breakpoints en:
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Móvil**: < 480px

## Uso

1. **Registro**: Crear una cuenta en `/register.html`
2. **Login**: Iniciar sesión en `/login.html`
3. **Ver álbumes**: La página principal muestra todos los álbumes
4. **Crear álbum**: Click en "Crear Album" para agregar uno nuevo
5. **Editar álbum**: Click en "Editar" en cualquier tarjeta de álbum
6. **Eliminar álbum**: Click en "Eliminar" (requiere confirmación)
7. **Cerrar sesión**: Click en "Cerrar sesión" para salir


