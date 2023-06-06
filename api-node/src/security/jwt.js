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
}

export default jwrSecurity;
