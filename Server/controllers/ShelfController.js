const Shelf = require('../models/Shelf');

const ShelfController = {

    /* get all shelf (only admin) */
    async get_shelfs(req, res) {
        try {
            const shelf = await Shelf.find();
            res.status(200).json({
                type: "success",
                shelf
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* get user shelf */
    async get_shelf(req, res) {
        try {
            const shelf = await Shelf.findOne({ userId: req.params.userId});
            if (!shelf) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    shelf
                })
            }
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* add book to shelf */
    async create_shelf(req, res) {
        const newShelf = new Shelf(req.body);
        try {
            const savedShelf = await newShelf.save();
            res.status(201).json({
                type: "success",
                message: "Book added successfully",
                savedShelf
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* delete book */
    async delete_shelf(req, res) {
        try {
            await Shelf.findOneAndDelete(req.params.id);
            res.status(200).json({
                type: "success",
                message: "Book has been deleted successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    }
};

module.exports = ShelfController;