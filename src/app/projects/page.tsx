import {ProjectDisplay} from "@/app/projects/projectDisplay";

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