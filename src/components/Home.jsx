import React from "react";
import Socials from "./Socials";
import About from "./About";
import "./Home.css";

export default function Layout() {
  return (
    <section className="mt-5 containerfluid d-flex justify-content-around">
      <div className="conatiner container-socials p-3 flex-wrap">
        <div className="d-flex justify-content-between">
          <div className="flex-row mt-4">
            <Socials />
          </div>
          <div className="flex-row col-7">
            <About />
          </div>
        </div>
      </div>
    </section>
  );
}
