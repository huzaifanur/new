import { createContext, useReducer } from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:1337/api/auth/local'

export const AuthContext = createContext()

let olduser, oldtoken
if (typeof localStorage !== 'undefined') {
  oldtoken = localStorage.getItem('token')
  olduser = JSON.parse(localStorage.getItem('user'))
}
export const initialState = {
  isAuth: false,
  user: olduser || null,
  token: oldtoken || null,
}

const AuthReducer = (state = initialState, action) => {
  console.log('12', action.payload)
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'LOGIN':
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const register = async (username, email, password) => {
    try {
      const response = await axios.post(baseUrl + '/register', {
        username,
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      dispatch({
        type: 'REGISTER',
        payload: { user: response.data.user, token: response.data.token },
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  const login = async (identifier, password) => {
    try {
      const response = await axios.post(baseUrl, {
        identifier,
        password,
      })
      localStorage.setItem('token', response.data.jwt)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      dispatch({
        type: 'LOGIN',
        payload: { user: response.data.user, token: response.data.jwt },
      })
      return response.data.user
    } catch (error) {
      new Error(error.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <AuthContext.Provider value={{ state, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
