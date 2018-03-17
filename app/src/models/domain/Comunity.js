module.exports = (sequelize, DataTypes) => {
    const Comunity = sequelize.define('Comunity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        web_url: {
            type: DataTypes.STRING,
        },
        mweb_url: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: true,
        createdAt: "create_at",
        updatedAt: "update_at"
    });
    
    Comunity.associate = function (models) {
        models.Comunity.hasMany(models.Board);
    };

    return Comunity;
};