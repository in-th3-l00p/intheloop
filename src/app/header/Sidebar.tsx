import React, {useEffect, useState} from "react";
import style from "@/app/header/header.module.scss";
import Image from "next/image";
import Link from "next/link";

function SidebarLink({href, setOpened, children}: {
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

export const Sidebar: React.FC<SidebarProps> = ({opened, setOpened}) => {
    "use client";

    const [width, setWidth] = useState(0);
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