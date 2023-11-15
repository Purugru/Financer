const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../models/categoryModel");

// Create Category
const createCategory = catchAsyncError(async (req, res, next) => {

    if (!req.user.id) {
        return next(
            new ErrorHandler("Please login to continue")
        )
    }

    const { name } = req.body;

    const defaultItem = {
        name: "Item",
        price: 500,
        method: "UPI",
    };

    const category = await Category.create({
        name,
        items: [defaultItem],
        TotalAmount: 500.0,
        user: req.user.id,
    });

    res.status(201).json({
        success: true,
        category,
    });
});

// Update Category
const updateCategory = catchAsyncError(async (req, res, next) => {
    if (!req.user.id) {
        return next(
            new ErrorHandler("Please login to continue")
        )
    }

    const { name } = req.body;

    let category = await Category.findById(req.params.id);

    if (!category) {
        return next(
            new ErrorHandler(`Category not found with id: ${req.params.id}`, 404)
        );
    }

    if (category.user.toString() !== req.user.id) {
        return next(
            new ErrorHandler("Unauthorized access")
        )
    }

    if (!name) {
        return next(
            new ErrorHandler(`Name not there`, 404)
        );
    }

    if (name) category.name = name;

    await category.save();

    res.status(200).json({
        success: true,
        category,
    });
});


const deleteCategory = catchAsyncError(async (req, res, next) => {
    if (!req.user.id) {
        return next(
            new ErrorHandler("Not logged in")
        )
    }

    const category = await Category.findById(req.params.id);

    if (category.user.toString() !== req.user.id) {
        return next(
            new ErrorHandler("Unauthorized access")
        )
    }

    if (!category) {
        return next(
            new ErrorHandler(`Category not found with id: ${req.params.id}`, 404)
        );
    }

    await Category.findByIdAndRemove(req.params.id);

    res.status(200).json({
        success: true,
        message: "Category deleted successfully",
    });
});

const getCategoryData = catchAsyncError(async (req, res, next) => {
    if (!req.user.id) {
        return next(
            new ErrorHandler("Not logged in")
        )
    }

    const userId = req.user.id;

    const categories = await Category.find({ user: userId });

    res.status(200).json({
        success: true,
        categories,
    });
});


module.exports = {
    getCategoryData,
    createCategory,
    updateCategory,
    deleteCategory,
};
