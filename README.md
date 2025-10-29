# Recuperatorio - API de Gestión de Tarjetas

Este proyecto es una API para la gestión de tarjetas, que incluye funcionalidades para obtener, crear, actualizar y eliminar tarjetas.
 La API está construida con Node.js y Express.

# Endpoints
Obtener tarjetas por email
Método: GET
URL: /cards/:email
Autenticación: Requiere encabezado Authorization con credenciales en formato Basic.
GET http://127.0.0.1:3001/cards/john.doe@example.com
Authorization: Basic YWRtaW46YWRtaW4xMjM0

Crear una tarjeta
Método: POST
URL: /cards
Cuerpo:
 {
  "cardNumber": "1234567890123456",
  "email": "test@example.com",
  "name": "Test Card"
}

Actualizar una tarjeta
Método: PUT
URL: /cards/:cardNumber
{
  "name": "Updated Card Name"
}

Eliminar una tarjeta
Método: DELETE
URL: /cards/:cardNumber
Middleware de Autenticación
El middleware authMiddleware verifica el encabezado Authorization y valida las credenciales. Las credenciales por defecto son:

Usuario: admin
Contraseña: admin1234