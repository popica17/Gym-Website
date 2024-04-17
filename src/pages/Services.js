import React from "react";
import HeroComponent from "../components/HeroComponent";
import { ourServices } from "../configs/clientConfig";
import Service from "../components/Service";

function Services() {
  return (
    <div>
      <HeroComponent
        height={500}
        title="SERVICIILE NOASTRE"
        backgroundImage="https://www.coinstreet.org/sites/default/files/styles/banner_image/public/2023-06/Colombo%20centre%20gym%20weights.jpg?itok=Fh89o5ZM"
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-row flex-wrap justify-center w-full py-12">
          {ourServices.map((service, index) => {
            return (
              <Service
                key={index}
                serviceImage={service.image}
                serviceTitle={service.title}
                serviceDescription={service.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
