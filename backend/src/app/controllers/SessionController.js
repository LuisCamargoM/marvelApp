import jwt from "jsonwebtoken";
import auth from "../../config/auth";
import User from "../../app/models/User";

class SessionControler {
  async store(req, res) {
    const {  email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Password does not match" });
    }

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,        
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn // Expiracao
      })
    });
  }
}

export default new SessionControler();
