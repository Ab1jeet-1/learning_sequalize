const db = require("./../modal/index");
const items = db.user;

exports.creatingModel = async (req, res) => {
    console.log(req.body);

    const item = {
        heading: req.body.heading,
        description: req.body.description,
        isCompleted: req.body.isCompleted
    }
    console.log(item);
    // const itemSend = await items.create(item);
    const itemSend = await items.create(item);

    res.status(200).json({
        status: 'created',
        itemSend
    })
}


exports.login = (req, res) => {
    res.status(200).json({
        status: 'login'
    })
}

exports.signup = (req, res) => {
    res.status(200).json({
        status: 'signup'
    })
}
