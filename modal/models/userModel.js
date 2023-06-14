const database = require('./../index');

module.exports = (sequalize, DataTypes) => {
    const listItems = sequalize.define("users", {
        heading: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
        }

    })
    return listItems;
}

