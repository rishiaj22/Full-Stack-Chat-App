import multer from "multer";

const storage = multer.memoryStorage();
const imageUpload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
});

export default imageUpload;
