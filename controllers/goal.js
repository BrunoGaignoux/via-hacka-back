const db = require('../database/goals.json');

module.exports = () => {
    const goals = db;
    const controller = {};

    controller.get = (req, res) => {
        function percent(value) {
            return {
                ...value,
                difference: Number(((100 * value.affected) / value.total).toFixed(2))
            }
        };

        const recommended = percent(goals.recommended);
        const custom = percent(goals.custom);

        return res.status(200).json(
            {
                'data': {
                    recommended,
                    custom
                }
            }
        );
    };

    return controller;
};