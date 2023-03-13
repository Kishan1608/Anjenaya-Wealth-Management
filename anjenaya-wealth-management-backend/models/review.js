import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        review: {
            type: String
        }
    },
    {timestamps: true}
);

export default mongoose.model('Review', reviewSchema);

