# Recuperatorio - Gestión de Tarjetas

Este proyecto es una API REST desarrollada en Node.js que permite gestionar tarjetas de crédito. Incluye autenticación mediante tokens JWT para proteger las rutas y garantizar que solo usuarios autorizados puedan acceder a las funcionalidades.

# Endpoints
Obtener tarjetas por email
Método: GET
URL: /cards/:email
GET http://127.0.0.1:3001/cards/wperalta@gmail.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYxNzgwMzY4LCJleHAiOjE3NjE4NjY3Njh9.T0sxUY30MOn3GIpcboExNr0coDlMX21J16kmegq-c-I

Crear una tarjeta
POST http://127.0.0.1:3001/cards
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYxNzgwMzY4LCJleHAiOjE3NjE4NjY3Njh9.T0sxUY30MOn3GIpcboExNr0coDlMX21J16kmegq-c-I

    {
      "cardNumber": "1234567890123456",
      "cardHolder": "Wanda Peralta",
      "expirationDate": "12/25",
      "cvv": "123",
      "email": "wperalta@gmail.com"
    }

Actualizar una tarjeta
Método: PUT
URL: /cards/:cardNumber
PUT http://127.0.0.1:3001/cards/1234567890123456

{
  "cardHolder": "Ana Peralta"
}

Eliminar una tarjeta
Método: DELETE
URL: /cards/:cardNumber
DELETE http://127.0.0.1:3001/cards/1234567890123456

Middleware de autenticación
El middleware authMiddleware verifica el encabezado Authorization y valida el token JWT. Si el token es válido, permite el acceso a las rutas protegidas. En caso contrario, devuelve un error 401.

Usuario: admin
Contraseña: admin1234