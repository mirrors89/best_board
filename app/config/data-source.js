export default class DataSource {
    constructor() {
        this._env = process.env.NODE_ENV || "dev";
        this._dbConfig = require("../resources/db.json")[this._env];
    }

    get getConfig() {
        return this._dbConfig;
    }
}