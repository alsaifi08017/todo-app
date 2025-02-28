const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send('No token provided');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        if (!user) throw new Error();
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
};

module.exports = authMiddleware;