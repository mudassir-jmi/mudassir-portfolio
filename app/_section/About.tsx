export default function About() {
    return (
        <section
            id="about"
            className="py-5 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold">
                    About Me
                </h2>

                <p className="mt-8 text-lg text-zinc-600 leading-8">
                    I am a Full Stack Developer with professional
                    experience building SaaS billing applications,
                    REST APIs and scalable business solutions.

                    I specialize in Next.js, React,
                    ASP.NET MVC and SQL Server.

                    Currently working at Anchovies IT
                    Solutions where I contribute to
                    billing systems, GST integrations,
                    reporting modules and backend APIs.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    <div className="border rounded-2xl p-6">
                        <h3 className="text-4xl font-bold">
                            1+
                        </h3>
                        <p>Years Experience</p>
                    </div>

                    <div className="border rounded-2xl p-6">
                        <h3 className="text-4xl font-bold">
                            10+
                        </h3>
                        <p>Features Delivered</p>
                    </div>

                    <div className="border rounded-2xl p-6">
                        <h3 className="text-4xl font-bold">
                            2+
                        </h3>
                        <p>Production Projects</p>
                    </div>

                </div>

            </div>
        </section>
    );
}