const roles = require("../role/role");
// pass a requirePermission parameter
const authorize = (requirePermission) => (req, res, next) => {
  // take role from user.roles
  const userRole = req.user.roles;

  const userPermissions = roles[userRole] || [];
  //every is check
  const hasPermission = requirePermission.every((p) =>
    userPermissions.includes(p)
  );

  if (!hasPermission) {
    return res.status(404).json({ message: "Access denied" });
  }
  next();
};

module.exports = authorize;
