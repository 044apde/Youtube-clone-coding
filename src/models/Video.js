import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true, maxlength: 80},
    description: {type: String, required: true, trim: true, minlength: 20}, 
    createdAt: {type: Date, required: true, default: Date.now, trim: true},
    hashtags: [{type: String, trim: true}],
    meta: {
        views: {type: Number, default: 0, required: true},
        rating: {type: Number, default: 0, required: true}
      },
});

const Video = mongoose.model("Video", videoSchema); // "video"는 몽구스에게 db를 위한 model의 이름을 알려주는 것이다. 
export default Video;
