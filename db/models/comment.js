import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

export default () => {
    return sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
}