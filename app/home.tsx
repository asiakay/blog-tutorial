import { Outlet } from "@remix-run/react";


export default function Home() {
    return (
      <section className="container mx-auto my-20 md:w-1/3 p-5 border border-blue-700 rounded-lg">
        <form className="space-y-10">
          <h4 className="text-center text-3xl text-blue-700">
            A Remix form styled with Tailwind
          </h4>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              className="border border-gray-700 px-4 py-3 focus:outline-none focus:border-blue-700 rounded-lg"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border border-gray-700 px-4 py-3 focus:outline-none focus:border-blue-700 rounded-lg"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="border border-gray-700 px-4 py-3 focus:outline-none focus:border-blue-700 col-span-2 rounded-lg"
              placeholder="Email"
            />
            <textarea
              cols="5"
              rows="2"
              className="border border-gray-700 px-4 py-2 focus:outline-none focus:border-blue-700 col-span-2 rounded-lg"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="focus:outline-none mt-5 bg-blue-700 px-4 py-3 text-white w-full text-lg rounded-lg"
          >
            Submit
          </button>
        </form>
        <Outlet />

      </section>

    );
  }