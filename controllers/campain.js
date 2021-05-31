const db = require('../database/campains.json');

module.exports = () => {
    const campains = db;
    const controller = {};

    controller.get = (req, res) => {
        return res.status(200).json(
            {
                'data': campains.filter(item => new Date(item.date) >= new Date())
            }
        );
    };

    return controller;
};