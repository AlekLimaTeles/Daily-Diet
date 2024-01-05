import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { userRoutes } from './routes/userRoutes'
import { mealsRoutes } from './routes/mealsRoutes'


export const app = fastify()

app.register(cookie)

app.register(userRoutes, { prefix: 'users'})
app.register(mealsRoutes, { prefix: 'meals'})

