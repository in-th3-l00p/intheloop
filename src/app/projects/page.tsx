"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

interface Project {
    title: string;
    shortDescription?: string;
    description: string;
    images: string[];
}

function ProjectDisplay({ title, description, shortDescription, images }: Project) {
    "use client";

    const [opened, setOpened] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (images.length < 1)
        return <></>;
    return (
        <>
            {opened && (
                <div
                    className={
                        "fixed z-50 top-0 left-0 w-screen h-screen " +
                        "flex justify-center items-center bg-black bg-opacity-50"
                    }
                >
                    <section
                        className={
                            "bg-primary w-full h-full max-w-[1000px] max-h-[700px] " +
                            (windowSize.width > 1000 || windowSize.height > 700 ? "rounded-md" : "")
                        }
                    >
                        <div className={"flex justify-between p-4 md:p-10"}>
                            <h1 className={"text-4xl"}>{title}</h1>

                            <button
                                className={
                                    "rounded-full shadow-slate-500 shadow-md" +
                                    " hover:shadow-slate-500 hover:shadow-lg"
                                }
                                onClick={() => setOpened(false)
                                }
                            >
                                <Image
                                    src={"/icons/close.svg"}
                                    alt={title}
                                    width={400}
                                    height={300}
                                    className={"invert w-8 h-8"}
                                />
                            </button>
                        </div>

                    </section>
                </div>
            )}
            <button
                className={
                    "relative max-w-fit max-h-fit rounded-md shadow-slate-500 shadow-md" +
                    " hover:shadow-slate-500 hover:shadow-lg"
                }
                onClick={() => setOpened(true)}
            >
                <Image
                    src={images[0]}
                    alt={title}
                    width={400}
                    height={300}
                    className={"rounded-md"}
                />

                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 p-2 rounded-md mb-2"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                    <h2 className={"font-bold text-center"}>{title}</h2>
                    <p>{!!shortDescription ? shortDescription : description.substring(0, 10)}</p>
                </div>
            </button>
        </>
    );
}

export default function Projects() {
    return (
        <section className={"padding-container"}>
            <h1 className={"text-4xl pb-4 border-b mb-4 pt-8"}>projects</h1>

            <ProjectDisplay
                title={"Farmcheck"}
                shortDescription={"Platform for digitalizing agriculture"}
                description={"A web application for farmers to manage their crops and livestock"}
                images={[ "/screenshots/farmcheck/home.png" ]}
            />
        </section>
    );
}