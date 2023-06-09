import jwt from 'jsonwebtoken'
import { JWT_SESSION_SECRET } from '../../config/config.js'

const expiresIn = 24 * 60 * 60 * 1000 // 1 day
// const expiresIn = 30 * 1000 // 30 seconds

export const HandleCurrent = async (req, res, next) => {
  res.send(req.user)
}

export const HandleGithub = async (req, res, next) => {
  const { fullname, first_name, last_name, email } = req.user.payload
  const obj = { fullname, first_name, last_name, email }
  const token = jwt.sign(obj, JWT_SESSION_SECRET)
  await res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: expiresIn
  })
  res.redirect('/products')
}

export const HandleSignIn = async (req, res, next) => {
  const token = jwt.sign(req.user.payload, JWT_SESSION_SECRET)
  await res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: expiresIn
  })
  res.redirect('/api/session/current')
}

export const HandleSignUp = async (req, res, next) => {
  const { fullname, first_name, last_name, email, age, cart, role } = req.user.payload
  const obj = { fullname, first_name, last_name, email, age, cart, role }
  const token = jwt.sign(obj, JWT_SESSION_SECRET)
  await res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: expiresIn
  })
  res.redirect('/api/session/current')
}

export const HandleLogout = async (req, res, next) => {
  res.clearCookie('jwt')
  res.sendStatus(204)
}
