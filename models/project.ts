import mongoose from 'mongoose';

export type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});

export const ProjectRepository =
    mongoose.models.Project || mongoose.model('Project', projectSchema);
