module.exports = () => {
    const controller = {};

    controller.get = (req, res) => {
        const myRevenues = ((Math.random() * (1000000.00 - 100 + 1)) + 100).toFixed(2);
        const marketRevenues = (Math.random() * (10000000.00 - 100 + 1) + 100).toFixed(2);

        return res.status(200).json(
            {
                'data': {
                    myRevenues,
                    marketRevenues 
                }
            }
        );
    };

    return controller;
};