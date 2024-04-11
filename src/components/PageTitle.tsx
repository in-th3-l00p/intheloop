import React from "react";

export default function PageTitle(
    { children }: { children: React.ReactNode }
) {
    return (
        <h1 className="text-4xl pb-4 border-b mb-4 pt-8">{children}</h1>
    );
}