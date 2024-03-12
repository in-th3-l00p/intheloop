"use client";

import React, { useEffect, useState } from "react";
import style from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

function SidebarLink({ href, setOpened, children }: {
    href: string,
    setOpened: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}) {
    return (
        <Link
            href={href} className={
                style.sidebarLink +
                (window.location.pathname === href ? " bg-secondary" : "")
            }
            onClick={() => setOpened(false)}
        >
            {children}
        </Link>
    );
}

interface SidebarProps {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ opened, setOpened }) => {
    "use client";

    const [width, setWidth] = useState(window.innerWidth);
    const smallBreakpoint = 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!opened)
        return <></>
    return (
        <div className={style.sidebarContainer}>
            <div
                onClick={() => setOpened(false)}
                className={style.sidebarOverlay}
            />
            <nav className={style.sidebar}>
                <div className="w-full pb-4 border-b-2 flex flex-col justify-center items-center">
                    <Image
                        src="/logo.svg" alt="intheloop logo"
                        width={50} height={50}
                    />
                    <h2 className="font-bold text-xl">intheloop</h2>
                </div>

                <div className={"flex flex-col"}>
                    <SidebarLink href={"/"} setOpened={setOpened}>home</SidebarLink>
                    <SidebarLink href={"/about"} setOpened={setOpened}>about</SidebarLink>
                    <SidebarLink href={"/contact"} setOpened={setOpened}>contact</SidebarLink>
                    <SidebarLink href={"/projects"} setOpened={setOpened}>projects</SidebarLink>
                </div>

                {width < smallBreakpoint && (
                    <button
                        type="button"
                        onClick={() => setOpened(false)}
                        className={
                            "bg-zinc-950 p-1 rounded-full shadow-zinc-600 shadow-md absolute " +
                            "top-5 left-5 hover:bg-zinc-800 hover:shadow-zinc-600 hover:shadow-lg transition-all"
                        }
                    >
                        <Image
                            src="/icons/close.svg"
                            alt="close"
                            width={20} height={20}
                            className="invert"
                        />
                    </button>
                )}
            </nav>
        </div>
    );
}

const Header = () => {
    const [sidebar, setSidebar] = React.useState(false);

    return (
        <>
            <Sidebar opened={sidebar} setOpened={setSidebar} />
            <header className={style.header}>
                <a href="/">
                    <Image
                        src="/logo.svg" alt="intheloop logo"
                        className="w-12"
                        width={50} height={50}
                    />
                </a>
                <button
                    type="button"
                    className="p-1 hover:bg-zinc-900 rounded-md hover:shadow-zinc-800 hover:shadow-md"
                    title="Toggle sidebar"
                    onClick={() => setSidebar(!sidebar)}
                >
                    <Image
                        src="/icons/sidebar-toggler.svg" alt="sidebar toggler icon"
                        className="w-8 invert"
                        width={20} height={20}
                    />
                </button>
            </header>
        </>
    );
}

export default Header;