module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
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
        createdAt: "create_at",
        updatedAt: "update_at"
    });

    Board.associate = function (models) {
        models.Board.belongsTo(models.Comunity, {
            foreignKey: {
                primaryKey: true
            }
        });
    };
    return Board;
};
