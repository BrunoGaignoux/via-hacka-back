module.exports = () => {
    const controller = {};

    controller.get = (req, res) => {
        const mySale = (Math.random() * 1000000000.00).toFixed(2);
        const marketSale = (Math.random() * 1000000000.00).toFixed(2);

        return res.status(200).json(
            {
                'data': {
                    mySale,
                    marketSale 
                }
            }
        );
    };

    return controller;
};