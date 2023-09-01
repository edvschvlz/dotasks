import jwt from 'jsonwebtoken';

export const Auth = (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    console.log(token);

    if (!token) {
      return res.status(401).json({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, 'dotasks', (err, decoded) => {
      if (err) {
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      }

      req.user = decoded;

      next();
    });
  } catch {
    res.status(401).json({
      error: 'Invalid request!',
    });
  }
};
