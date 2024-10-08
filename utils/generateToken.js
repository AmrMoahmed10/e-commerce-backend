const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
	const token = jwt.sign(
		{ id: user._id, role: user.role },
		process.env.JWT_SECRET,
		{ expiresIn: "1d" }
	);
	return token;
};
