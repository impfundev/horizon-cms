# Horizon CMS API Documentation

## 1. Authentication

### JWT Payload Structure
The authentication system uses JSON Web Tokens (JWT) for stateless session management.

**Payload:**
```json
{
  "userId": "string (UUID)",
  "email": "string",
  "roleId": "string | null (UUID)"
}
```

**Expiration:** 24 hours.

### Endpoints

#### POST `/api/v1/auth/login`
Authenticates a user and returns a JWT.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbG...",
  "user": {
    "id": "uuid",
    "username": "username",
    "email": "user@example.com",
    "roleId": "uuid"
  }
}
```

#### GET `/api/v1/auth/logout`
Ends the session. (Primarily client-side token removal).

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```
