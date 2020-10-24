import { Sequelize } from 'sequelize';
import User from './models/user';
import Comment from './models/comment';

export const sequelize = new Sequelize(
    process.env.DB_URL || 'postgres://postgres:postgres@localhost:5431/blog-db',
    {
        dialect: "postgres",
    }
);

export const UserModel = User();
export const CommentModel = Comment();

CommentModel.belongsTo(UserModel, {foreignKey: 'userId', as: 'user'});

sequelize.sync().then(() => {
    console.log('Database now is sync!');
})