import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import DataSource from "../../config/data-source";

class DatabaseConfig {
    constructor() {
        const config = new DataSource().getConfig;
        const sequelize = new Sequelize(config.database, config.username, config.password, config);
        const models = {};

        // 모델 추가
        fs.readdirSync(__dirname + "/domain/")
            .forEach(function (file) {
                let model = sequelize.import(path.join(__dirname + "/domain/", file));
                models[model.name] = model;
            });

        this._sequelize = sequelize;
        this._model = models;
    }

    get getSequelize() {
        return this._sequelize;
    }

    get getModels() {
        return this._model;
    }
}
const database = new DatabaseConfig();
export const sequelize = database.getSequelize;
export const models = database.getModels;