module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        id: {
            type: DataTypes.INTEGER,
            //autoIncrement: true
        },
        comunity_id : {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        comunity_board_id : {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        web_url : {
            type: DataTypes.STRING,
        },
        mweb_url : {
            type: DataTypes.STRING,
        },
        view : {
            type: DataTypes.INTEGER,
        },
        like : {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: true,
        createdAt: "createAt",
        updatedAt: "updateAt"
    });

    return Board;
};
