"use client";

import React from "react";
import style from "./header.module.scss";
import Image from "next/image";
import {Sidebar} from "@/app/header/Sidebar";

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