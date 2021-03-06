const { User } = require('../models');

const isAdmin = async(req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) return next({ name: 'unauthorize' });
    if (user.role !== 'admin') return next({ name: 'unauthorize' });

    return next()
  } catch (error) {
    next(error)
  }
}

module.exports = isAdmin