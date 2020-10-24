import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

export default () => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    });
}