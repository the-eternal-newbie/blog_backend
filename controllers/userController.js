import { UserModel, CommentModel } from '../db/sequelize';

export default class userController {
    constructor() {}

    async create(req, res) {
        const newUser = await UserModel.create(req.body);
        return(res.json(newUser));
    }

    async addComment(req, res) {
        const commentData = req.body;
        const user = await UserModel.findByPk(commentData.userId);
        if(user) {
            const newComment = await CommentModel.create(commentData);
            return(res.json(newComment));
        }
    }

    async deleteComment(req, res) {
        const delComment = await CommentModel.destroy({where: {'id': req.params.id}});
        return(res.json(delComment));
    }

    async listComments(req, res) {
        const comments = await CommentModel.findAll({
            include: [
                {
                    model: UserModel,
                    as: 'user',
                    attributes: [
                        'username'
                    ]
                }
            ]
        });
        return(res.json(comments));
    }
}