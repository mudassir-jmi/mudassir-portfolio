import { portfolio } from "../lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="heading-font gradient-text mb-12 text-center text-4xl font-bold">
          About Me
        </h2>

        <div className="glass rounded-3xl p-10">
          <p className="text-lg leading-8 text-gray-300">
            {portfolio.about}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                1+
              </h3>
              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                10+
              </h3>
              <p className="text-gray-400">
                Features Delivered
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                3+
              </h3>
              <p className="text-gray-400">
                Major Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">
                100%
              </h3>
              <p className="text-gray-400">
                Learning Mindset
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}