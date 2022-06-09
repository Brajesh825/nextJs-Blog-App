import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	content: {
		type: String,
		required: [true, "content is required!"],
		trim: true,
	},
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post ||
	mongoose.model("Post", PostSchema);