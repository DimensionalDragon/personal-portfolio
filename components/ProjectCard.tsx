import type { Project } from '../models/project';

type ProjectCardProps = {
    project: Project;
};

const tempTags = ['Programming'];

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex justify-center align-center w-4/5 md:w-2/5 lg:w-1/4 h-full py-2 m-3">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="project-card group card w-80 h-96 bg-primary-blue hover:bg-tertiary-blue shadow-xl">
                    <figure className="h-1/2">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform"
                        />
                    </figure>
                    <div className="card-body text-white text-left">
                        <h2 className="card-title group-hover:underline">
                            {project.title}
                        </h2>
                        <p>{project.description}</p>
                        <div className="card-actions justify-end">
                            {tempTags.map((tag, i) => (
                                <div
                                    key={i + 1}
                                    className="badge badge-outline badge-info bg-slate-100/5"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
