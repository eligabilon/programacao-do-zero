import jwt from "jsonwebtoken";

class jwrSecurity {
  static authJWT = (req, res) => {
    const token = req.headers.authorization;

    jwt.verify(token, "segredo_do_token", (err, decoded) => {
      if (!token || err) {
        return res.status(401).json({ message: "Token inválido." });
      }
    });
  };

  static generateToken(user) {
    const payload = {
      id: user._id,
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(payload, 'segredo_do_token', { expiresIn: '1h' });
    return token;
  }

}

export default jwrSecurity;
