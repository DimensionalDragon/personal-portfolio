import Head from 'next/head';

import type { Project } from '../models/project';

import axios from 'axios';

import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';
import React from 'react';

type HomeProps = {
    projects: Project[];
};

const Home = ({ projects }: HomeProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-white">
            <Head>
                <title>DimensionalDragon</title>
                <script
                    src="https://kit.fontawesome.com/9b73585f4c.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>

            <Nav forHome={true}></Nav>

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <section
                    id="welcome-section"
                    className="w-full bg-primary-blue"
                >
                    <div className="hero min-h-screen">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                {/* TODO: Get an image to put here
                                <Image src='' alt='' /> */}
                                <h1 className="mb-5 text-5xl font-bold">
                                    DimensionalDragon
                                </h1>
                                <p className="mb-5">Learning web development</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="projects"
                    className="bg-secondary-blue pb-4 scroll-my-16"
                >
                    <div className="projects-content">
                        <h2 className="projects-header text-5xl my-5 p-3">
                            These are some of my projects
                        </h2>
                        <div className="projects-container flex justify-center items-center flex-wrap gap-x-16">
                            {projects.map((project, i) => (
                                <ProjectCard key={i + 1} project={project} />
                            ))}
                        </div>
                        <a href="/projects">
                            <button className="btn btn-wide my-3">
                                See More
                            </button>
                        </a>
                    </div>
                </section>
                <section
                    className="flex flex-col items-center justify-center bg-tertiary-blue w-full h-[75vh]"
                    id="contacts"
                >
                    <h2 className="text-5xl my-5 p-3 font-bold">Contact me</h2>
                    <div className="contacts-container select-none">
                        <a
                            href="https://www.github.com/DimensionalDragon/"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center mx-3 text-xl "
                            id="profile-link"
                        >
                            <i className="fa-brands fa-github mx-1 group-hover:-translate-y-2 transition-transform"></i>
                            <b className="group-hover:-translate-y-2 transition-transform">
                                Github
                            </b>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andhikasatrya/"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center mx-3 text-xl transition-transform"
                            id="profile-link"
                        >
                            <i className="fa-brands fa-linkedin mx-1 group-hover:-translate-y-2 transition-transform"></i>
                            <b className="group-hover:-translate-y-2 transition-transform">
                                LinkedIn
                            </b>
                        </a>
                    </div>
                    <div className="email mt-14 text-xl">
                        <p className="email-desc">Or email me at</p>
                        <p className="email-address">andhikangurah@gmail.com</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const fullUrl: string = context.req.headers.referer;
    const [protocol, domainAndPath] = fullUrl.split('://');
    const [domain] = domainAndPath.split('/');
    const baseUrl = `${protocol}://${domain}`;
    const projectsAPIEndpoint: string = `${baseUrl}/api/projects?limit=6&key=${process.env.API_KEY}`;
    const response = await axios.get(projectsAPIEndpoint);
    const projects: Project[] = response.data;
    return {
        props: { projects },
    };
}

export default Home;
