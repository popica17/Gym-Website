import React from "react";
import HeroComponent from "../components/HeroComponent";
import { ourMembers } from "../configs/clientConfig";
import TeamMember from "../components/TeamMember";

function OurTeam() {
  return (
    <div>
      <HeroComponent
        height={500}
        title="Echipa noastra"
        backgroundImage="https://www.coinstreet.org/sites/default/files/styles/banner_image/public/2023-06/Colombo%20centre%20gym%20weights.jpg?itok=Fh89o5ZM"
      />

      <div className="max-w-5xl mx-auto ">
        <div className="flex flex-row flex-wrap justify-center w-full py-12">
          {ourMembers.map((member, index) => {
            return (
              <TeamMember
                key={index}
                memberDescription={member.description}
                memberName={member.name}
                profileImage={member.profilePicture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
