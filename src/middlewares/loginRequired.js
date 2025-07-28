import jwt from 'jsonwebtoken';
import User from '../models/user/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['BACK - Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
  // eslint-disable-next-line no-undef
  const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email} = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['BACK - Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch {
    return res.status(401).json({
      errors: ["BACK - Token expirado ou inválido"],
    });
  }
};
