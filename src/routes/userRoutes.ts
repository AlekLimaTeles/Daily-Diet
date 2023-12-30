import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

export async function userRoutes(app: FastifyInstance) {
    app.post('/', async (request, reply) => {
        const createUserBodySchema = z.object({
            name: z.string(),
            email: z.string().email()
        })

        let sessionId = request.cookies.sessionId

        const { name, email } = createUserBodySchema.parse(request.body)

        const userByEmail = await knex('users').where({ email }).first()

        if (userByEmail) {
            return reply.status(400).send({ message: 'User already exists'})
        }


        await knex('users').insert({

        })
    })
}