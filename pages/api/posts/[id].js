import Post from "/models/Post";
import "/utils/dbConnect";

export default async (req, res) => {
  const { method } = req;
  const id = req.query.id;

  try {
    const post = await Post.find({ _id: id });
    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
    });
  }
};
