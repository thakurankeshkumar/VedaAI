import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    schoolName: String,
    subject: String,
    class: String,
    time: String,
    totalMarks: Number,
    instructions: [String],
    sections: Array,
    answer: Array
},
    {
        timestamps: true,
    }
);

export default mongoose.models.Assignment || mongoose.model("Assignment", AssignmentSchema);