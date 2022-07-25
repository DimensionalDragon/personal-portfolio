import Head from 'next/head';
import Image from 'next/image';

import axios from 'axios';

import type { Project } from '../models/project';

import Nav from '../components/Nav';
import React from 'react';

type ProjectsProps = {
    projects: Project[];
};

const Home = ({ projects }: ProjectsProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>Projects - DimensionalDragon</title>
            </Head>

            <Nav forHome={false}></Nav>

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <section
                    id="welcome-section"
                    className="w-full bg-primary-blue"
                >
                    <div className="hero min-h-screen">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">
                                    Development in Progress
                                </h1>
                                <p>Sorry, this page is under development.</p>
                                <p>Please check back later</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
