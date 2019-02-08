module.exports = (namespace, requiredPermissions) => {
  const error = (res) => {
      res.send(401, 'Insufficient permissions');
  }

  if (!Array.isArray(requiredPermissions)) {
    throw new Error("Expecting parameter to be an array of strings representing permissions");
  }

  return (req, res, next) => {
    if (requiredPermissions.length === 0) {
      return next();
    }

    const key = `${namespace}/permissions`;
    if (!req.user || !Array.isArray(req.user[key])) {
      return error(res);
    }

    const grantedPermissions = req.user[key];
    const authorized = requiredPermissions.some(permission => {
      return grantedPermissions.indexOf(permission) > -1
    });

    return authorized ? next() : error(res);
  }
}
