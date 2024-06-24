import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactSubmission from "@/mongoose/schemas/ContactSubmission";
import {redirect} from "next/navigation";
import PageTitle from "@/components/PageTitle";

async function saveSubmission(formData: FormData) {
    "use server";

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    await ContactSubmission.create({
        firstName, lastName, email, phone, message
    });

    redirect("/contact/thank-you");
}

async function Channel({
    icon,
    iconAlt,
    title,
    href,
    children
}: {
    icon: string;
    iconAlt: string;
    title: string;
    href: string;
    children: React.ReactNode
}) {
    "use server";

    return (
        <Link
            className={
            "flex items-center p-4 bg-secondary shadow-md rounded-md " +
                "hover:shadow-lg transition duration-300 ease-in-out hover:scale-105"
            }
            href={href}
            title={title}
        >
            <Image
                src={icon} alt={iconAlt}
                className={"w-8 h-8 invert"}
                width={50}
                height={50}
            />
            <div className={"ml-4 text-wrap"}>{children}</div>
        </Link>
    );
}

export default function Contact() {
    return (
        <section className="padding-container">
            <PageTitle>contact</PageTitle>

            <p>Feel free to contact me through the channels provided below, or submit your message through the form provided.</p>

            <div className={"grid grid-cols-1 md:grid-cols-2 py-8 mb-8 border-b sm:px-8 gap-8"}>
                <Channel
                    icon={"/icons/email.svg"}
                    iconAlt={"Email"}
                    title={"Email address: admin@tiscacatalin.com"}
                    href={"mailto:admin@tiscacatalin.com"}
                >
                    admin@tiscacatalin.com
                </Channel>

                <Channel
                    icon={"/icons/linkedin.svg"}
                    iconAlt={"LinkedIn"}
                    title={"LinkedIn: Tișcă Cătălin"}
                    href={"https://linkedin.com/tiscacatalin"}
                >
                    Tișcă Cătălin
                </Channel>
            </div>

            <form action={saveSubmission} className={"flex flex-col gap-8 sm:px-8 max-w-[1000px] mx-auto"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className={"form-group"}>
                        <label htmlFor="firstName">First name:</label>
                        <input
                            type="text"
                            id="firstName" name="firstName"
                            className={"input"}
                            max={255}
                            required
                        />
                    </div>

                    <div className={"form-group"}>
                        <label htmlFor="firstName">First name:</label>
                        <input
                            type="text"
                            id="firstName" name="lastName"
                            className={"input"}
                            max={255}
                            required
                        />
                    </div>
                </div>

                <div className={"form-group"}>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        id="email" name="email"
                        className={"input"}
                        max={255}
                        required
                    />
                </div>

                <div className={"form-group"}>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone" name="phone"
                        className={"input"}
                        max={255}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message" id="message"
                        className={"input h-[200px] resize-none"}
                        maxLength={2000}
                        required
                    />
                </div>

                <button type="submit" className="btn block mx-auto">Submit</button>
            </form>

        </section>
    );
}