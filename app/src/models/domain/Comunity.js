module.exports = (sequelize, DataTypes) => {
    const Comunity = sequelize.define('Comunity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            // autoIncrement: true
        },
        name: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        web_url: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        mweb_url: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: true,
        createdAt: "createAt",
        updatedAt: "updateAt"
    });

    return Comunity;
};