const Expence = require("../models/expenceModel");

const addExpence = async (req, res) => { //create
    try {
        const { title, amount, category, date, paymentMethod, notes } = req.body;

        const newExpence = new Expence({
            title,
            amount,
            category,
            date: date || new Date(),
            paymentMethod,
            notes,
            userId: req.user._id
        });

        const savedExpence = await newExpence.save();

        res.status(201).json({
            success: true,
            message: "Expense added successfully",
            data: savedExpence
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteExpense = async (req, res) => { //delete by id
    try {

        const expense = await Expence.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id
        });

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: 'Expense not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Expense deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const editExpence = async (req, res) => { //edit by id
    try {
        const updatedExpence = await Expence.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user._id
            },
            req.body,   // 👈 direct use
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedExpence) {
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Expense edited successfully",
            data: updatedExpence
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const readExpence = async (req, res) => { //read by id
    try {
        const expence = await Expence.findOne({
            _id: req.params.id,
            userId: req.user._id
        });

        if (!expence) {
            return res.status(404).json({
                success: false,
                message: 'Expense not found'
            });
        }

        res.status(200).json({
            success: true,
            data: expence  // Changed "message" to "data" for consistency
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const allExpence = async (req, res) => { //read all
    try {
        const expenses = await Expence.find({ userId: req.user._id });

        if (!expenses.length) {
            return res.status(200).json({
                success: true,
                data: [],
                message: "No expenses found"
            });
        }

        return res.status(200).json({
            success: true,
            data: expenses
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const readExpenceByTwoDates = async (req, res) => {
    try {
        const { from, to } = req.query;

        if (!from || !to) {
            return res.status(400).json({
                success: false,
                message: "Both from and to dates are required"
            });
        }

        const startDate = new Date(from);
        const endDate = new Date(to);
        endDate.setHours(23, 59, 59, 999);

        const expenses = await Expence.find({
            userId: req.user._id,
            date: {
                $gte: startDate,
                $lte: endDate
            }

        }).sort({ date: 1 });

        if (!expenses.length) {
            return res.status(200).json({
                success: true,
                data: [],
                message: "No expenses found in this date range"
            });
        }

        return res.status(200).json({
            success: true,
            data: expenses
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const readExpenceByDate = async (req, res) => {
    try {
        const { date } = req.query;  // ✅ Destructure karo

        if (!date) {
            return res.status(400).json({  // ✅ return add karo
                success: false,
                message: "Date is required"
            });
        }

        // ✅ Date ko start aur end time ke saath set karo
        const startDate = new Date(date);
        startDate.setHours(0, 0, 0, 0);  // Day start: 00:00:00

        const endDate = new Date(date);
        endDate.setHours(23, 59, 59, 999);  // Day end: 23:59:59

        // ✅ Range query use karo (exact match nahi)
        const expenses = await Expence.find({
            userId: req.user._id,
            date: {
                $gte: startDate,  // Greater than or equal
                $lte: endDate     // Less than or equal
            }
        }).sort({ date: 1 });

        if (!expenses.length) {
            return res.status(200).json({
                success: true,
                data: [],
                message: "No expenses found on this date"
            });
        }

        return res.status(200).json({
            success: true,
            data: expenses
        });

    } catch (err) {
        return res.status(500).json({  // ✅ return add karo
            success: false,
            message: err.message
        });
    }
};
/** 
const readByMonth = async (req, res) => {
    try {
        const { month, year } = req.query;
        if (!month || !year) {
            return res.status(400).json({
                success: false,
                message: "Month and year are required"
            })
        }

        if (month < 1 || month > 12) {
            return res.status(400).json({
                success: false,
                message: "Invalid month"
            })
        }
        // Start date: 1st day of month at 00:00:00
        const startDate = new Date(year, month - 1, 1);

        // End date: Last day of month at 23:59:59
        const endDate = new Date(year, month, 0, 23, 59, 59, 999);

        const expences = await Expence.find({
            userId: req.user._id,
            date: {
                $gte: startDate,
                $lte: endDate
            }
        }).sort({ date: 1 })

    } catch (err) {

    }
}
*/
module.exports = {
    addExpence,
    deleteExpense,  // Changed export name to match route
    editExpence,
    readExpence,
    allExpence,
    readExpenceByTwoDates,
    readExpenceByDate
};