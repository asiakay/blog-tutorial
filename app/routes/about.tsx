import { Outlet } from "@remix-run/react";

export default function About() {
  return (
    <>
      <section>
        I am the parent layout. I will be on any page inside of my named directory.
      </section>
      { /* All of my children, the files in the named directory, will go here. */ }
      <Outlet />
    </>
  )
}