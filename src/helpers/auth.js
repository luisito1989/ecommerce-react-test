import { LS_TOKEN_NAME } from "../constants/env"

export const token = () => localStorage.getItem(LS_TOKEN_NAME)

export const setToken = (token) => localStorage.setItem(LS_TOKEN_NAME, token)

export const deleteToken = () => localStorage.removeItem(LS_TOKEN_NAME)

export const clearLocal = () => localStorage.clear()