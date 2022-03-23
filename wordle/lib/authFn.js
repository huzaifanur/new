import axios from 'axios'

// Register.
export async function registerUser({ username, email, password }) {
  let error, token, user
  try {
    const response = await axios.post(
      'http://localhost:1337/api/auth/local/register',
      {
        username,
        email,
        password,
      }
    )
    user = response.data.user
    token = response.data.jwt
  } catch (e) {
    error = e.message
  }
  return { error, user, token }
}
// Login.
export async function loginUser({ identifier, password }) {
  let error, token, user
  try {
    const response = await axios.post(
      'http://localhost:1337/api/auth/local/register',
      {
        identifier,
        password,
      }
    )
    user = response.data.user
    token = response.data.jwt
  } catch (e) {
    error = e.message
  }
  return { error, user, token }
}
