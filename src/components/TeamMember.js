import React from "react";

function TeamMember({ key, profileImage, memberName, memberDescription }) {
  return (
    <div
      key={key}
      className="bg-blue-50 drop-shadow flex flex-row w-2/5 mx-6 my-6"
    >
      <img
        src={profileImage}
        alt="pic1"
        width={200}
        height={250}
        className="mr-3 rounded-s"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{memberName}</h3>
        <p>{memberDescription}</p>
      </div>
    </div>
  );
}

export default TeamMember;
