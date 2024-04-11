import React from "react";
import Link from "next/link";
import Image from "next/image";

const GridSpacer = () => {
    return (
        <div
            className="col-span-2 bg-white my-4 justify-self-center"
            style={{height: "1px", maxWidth: "600px", width: "100%" }}
        />
    )
}

export default function Footer() {
    return (
        <footer className="bg-zinc-950 grid grid-cols-2 py-4 px-8">
            <div
                className="justify-self-center flex flex-wrap gap-4 items-center col-span-2"
            >
                <Image
                    src="/logo.svg" alt="intheloop logo"
                    className="w-16"
                    width={64}
                    height={64}
                />
                <h2 className="text-3xl">intheloop</h2>
            </div>

            <GridSpacer />

            <ul className="justify-self-end me-8 flex flex-col gap-2 text-end">
                <li><Link href="/about" className="hover:underline">about</Link></li>
                <li><Link href="/contact" className="hover:underline">contact</Link></li>
            </ul>
            <ul className="justify-self-start ms-8 flex flex-col gap-2">
                <li><Link href="/blog" className="hover:underline">blog</Link></li>
                {/*<li><Link href="/projects" className="hover:underline">projects</Link></li>*/}
                <li><Link href="/Resume.pdf" className="hover:underline">resume</Link></li>
            </ul>
            <p className="col-span-2 text-center mt-4 italic text-zinc-500">all rights reserved ©</p>
        </footer>
    );
}
