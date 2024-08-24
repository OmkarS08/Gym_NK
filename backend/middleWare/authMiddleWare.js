const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        next(); // Proceed if the user is authenticated
    } else {
        res.status(401).json({ message: 'Unauthorized' }); // Block access if not authenticated
    }
};

module.exports = isAuthenticated;