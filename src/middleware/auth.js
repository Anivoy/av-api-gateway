export async function verify(req, reply) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    req.user = req.jwt.verify(token);
  } catch {
    reply.code(401).send({ message: 'Unauthorized' });
  }
}
