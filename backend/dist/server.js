import fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const app = fastify({ logger: true });
// CORS
app.register(cors);
// Routes de test
app.get('/', async (req, reply) => {
    return { message: 'API Backend fonctionne !', timestamp: new Date() };
});
app.get('/users', async (req, reply) => {
    const users = await prisma.user.findMany();
    return { users, count: users.length };
});
app.post('/users', async (req, reply) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
        data: { name, email }
    });
    return { user, created: true };
});
const start = async () => {
    try {
        await app.listen({ port: 3000, host: '0.0.0.0' });
        console.log('🚀 Backend démarré sur http://localhost:3000');
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map