const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../models/categoryModel");

// Create Item in Category
const createItem = catchAsyncError(async (req, res, next) => {
    const { categoryId, name, price, method } = req.body;

    const category = await Category.findById(categoryId);

    if (!category) {
        return next(new ErrorHandler(`Category not found with id: ${categoryId}`, 404));
    }


    if (category.user.toString() !== req.user.id) {
        return next(
            new ErrorHandler("Unauthorized access")
        )
    }

    const newItem = {
        name,
        price,
        method,
    };

    category.items.push(newItem);
    category.TotalAmount += newItem.price;

    await category.save();

    res.status(201).json({
        success: true,
        category,
    });
});

// Update Item in Category
const updateItem = catchAsyncError(async (req, res, next) => {
    const { categoryId, itemId } = req.params;
    const { name, price, method } = req.body;

    const category = await Category.findById(categoryId);
    
    if (!category) {
        return next(new ErrorHandler(`Category not found with id: ${categoryId}`, 404));
    }

    if (category.user.toString() !== req.user.id) {
        return next(
            new ErrorHandler("Unauthorized access")
        )
    }

    const item = category.items.id(itemId);

    if (!item) {
        return next(new ErrorHandler(`Item not found with id: ${itemId}`, 404));
    }

    if (name) item.name = name;

    if (price) {
        category.TotalAmount -= item.price;
        item.price = price;
        category.TotalAmount += item.price;
    }

    if (method) item.method = method;

    await category.save();

    res.status(200).json({
        success: true,
        category,
    });
});

// Delete Item in Category
const deleteItem = catchAsyncError(async (req, res, next) => {
    const { categoryId, itemId } = req.params;

    const category = await Category.findById(categoryId);

    if (category.user.toString() !== req.user.id) {
        return next(
            new ErrorHandler("Unauthorized access")
        )
    }


    if (!category) {
        return next(new ErrorHandler(`Category not found with id: ${categoryId}`, 404));
    }

    const itemIndex = category.items.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
        return next(new ErrorHandler(`Item not found with id: ${itemId}`, 404));
    }

    const removedItem = category.items.splice(itemIndex, 1)[0];

    category.TotalAmount -= removedItem.price;

    await category.save();

    res.status(200).json({
        success: true,
        category,
    });
});

module.exports = {
    createItem,
    updateItem,
    deleteItem,
};
