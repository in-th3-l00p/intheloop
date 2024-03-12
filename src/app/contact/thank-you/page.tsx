import Link from "next/link";

export default function ThankYou() {
    return (
        <section className={"w-full h-screen flex justify-center items-center"}>
            <div className={"text-center"}>
                <h1 className={"text-4xl mb-4"}>Thank you!</h1>
                <p className={"text-xl mb-8"}>Your message has been sent successfully!</p>
                <Link href={"/contact"} className={"btn"}>Back</Link>
            </div>
        </section>
    )
}