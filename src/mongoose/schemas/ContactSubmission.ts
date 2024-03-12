import mongoose from "mongoose";
import mongoConnection from "@/mongoose/mongoose";

const contactSubmissionSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    phone: {
        type: String,
        required: false,
        max: 255
    },
    message: {
        type: String,
        required: true,
        min: 1,
        max: 2000
    }
});

const ContactSubmission =
    mongoConnection.models.ContactSubmission ||
    mongoConnection.model("ContactSubmission", contactSubmissionSchema);
export default ContactSubmission;