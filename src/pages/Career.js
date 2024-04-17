import React from "react";
import HeroComponent from "../components/HeroComponent";
import { jobs } from "../configs/clientConfig";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Career() {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary-blue ">
      <HeroComponent
        height={900}
        title="VINO IN ECHIPA NOASTRA"
        backgroundImage="https://www.ridgleacountryclub.com/images/dynamic/getImage.gif?ID=100010871"
      />

      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-5xl text-white font-semibold">
          Joburi disponibile:
        </h1>

        <div className="w-full ">
          <div className="">
            {jobs.map((job) => {
              return (
                <h3
                  key={job.id}
                  className="bg-white text-black rounded-md text-3xl p-3 my-6"
                >
                  {job.name}
                </h3>
              );
            })}
          </div>
        </div>

        <Button variant="secondary" onClick={() => navigate("/contact")}>
          Contact
        </Button>
      </div>
    </div>
  );
}

export default Career;
