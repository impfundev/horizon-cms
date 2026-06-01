# TypeScript: Shared Type Flow

## Canonical types live in `shared/`

- `shared/types/api.ts` — `ApiResponse<T>`, `ApiMeta`, `ApiErrorBody`
- `shared/types/user.ts` — `User`
- `shared/types/auth.ts` — `LoginRequest`, `LoginResponse`, `LoginApiResponse`

## Backend

Schemas (`backend/src/schemas/...`) validate at runtime. Types used by Hono
handlers should be inferred from those schemas and re-exported via
`backend/src/schemas/index.ts` or imported directly from `shared`.

## Frontend

`tsconfig.json` maps:

```json
"shared": ["../../shared"]
```

All frontend services and stores import types from `"shared"`, not from local
duplicates. Local files such as `app/types/auth.ts` keep only client-side state
shapes (e.g. `AuthState`).

## How to add a new shared type

1. Add it under `shared/types/<domain>.ts`.
2. Re-export it in `shared/index.ts`.
3. Align the backend Zod schema to infer from the same shape if runtime
   validation is needed.
4. Update the frontend consumer to import from `"shared"` — no relative path
   changes.
