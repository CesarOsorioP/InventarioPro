/* 
Backend:

POST /api/auth/login → recibe { email, password }, devuelve { token, user }

POST /api/auth/register → recibe { email, password, name }, devuelve { token, user }

GET /api/auth/google → inicia autenticación OAuth con Google (falta implementar).
*/


const API_BASE = "http://localhost:3000/api/auth"; // cambiar a como se implemente en el backend la ruta 

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Error al iniciar sesión");
  return await res.json();
}

export async function register(name, email, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error("Error al registrar");
  return await res.json();
}

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
}