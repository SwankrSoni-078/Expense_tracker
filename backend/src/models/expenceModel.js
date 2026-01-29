const mongoose = require('mongoose');

const categories = [
    "Food",
    "Transport",
    "Utilities",
    "Entertainment",
    "Health",
    "Shopping",
    "Education",
    "Rent",
    "Other"
];

const paymentMethods = [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Bank Transfer",
    "UPI"
];

const expenseSchema = new mongoose.Schema({
    // Remove custom id - MongoDB's _id is better
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
        min: [0, 'Amount must be positive'],
        max:[10000000, "Amount can't exceed 10000000"]
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
            values: categories,
            message: '{VALUE} is not a valid category'
        }
    },
    notes: {
        type: String,
        trim: true,
        default: ''
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
        validate: {
            validator: function (value) {
                return value <= new Date(); // Future date not allowed
            },
            message: 'Expense date cannot be in the future'
        }
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        enum: {
            values: paymentMethods,
            message: '{VALUE} is not a valid payment method'
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    }
}, {
    timestamps: true
});

// Index for faster queries
expenseSchema.index({ userId: 1, date: -1 }); // Sort by date in descending order
expenseSchema.index({ userId: 1, category: 1 }); // Sort by category

const expenceModel = mongoose.model('Expense', expenseSchema);

module.exports = expenceModel;