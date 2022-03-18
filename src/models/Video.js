import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number,
    },
});

const Video = mongoose.model("video", videoSchema); // "video"는 몽구스에게 db를 위한 model의 이름을 알려주는 것이다. 
export default Video;
