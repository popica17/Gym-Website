import React, { useState } from "react";
import { clientConfig } from "../configs/clientConfig";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGlobeEurope } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  console.log("name", name);

  return (
    <form className="max-w-4xl mx-auto w-full py-[186px]">
      <div className="w-full flex flex-row justify-between rounded-md drop-shadow-md">
        <div className="w-1/2 bg-slate-50 p-[30px] flex flex-col justify-start">
          <h2 className="text-secondary-color text-xl lg:text-2xl xl:text-3xl font-bold mb-5">
            Trimite-ne un mesaj
          </h2>

          <Input
            deleteInputValue={() => setName("")}
            labelName={"Nume"}
            id={"name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>

          <Input
            deleteInputValue={() => setEmail("")}
            labelName={"Email"}
            id={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            deleteInputValue={() => setSubject("")}
            labelName={"Subiect"}
            id={"subiect"}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Textarea
            labelName={"Mesajul tau"}
            id={"message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button buttonVariant={"secondary"} buttonClassName={" w-1/2"}>
            Trimite mesajul
          </Button>
        </div>

        <div className="w-1/2  bg-gradient-to-b from-primary-blue to-secondary-blue p-[30px] rounded-e-md">
          <h2 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold">
            Contact
          </h2>

          <div className="h-[350px] flex flex-col justify-evenly">
            <div className="flex flex-row justify-start items-center">
              <FaMapMarkerAlt className="text-[40px] mr-5 text-white bg-white bg-opacity-20 rounded-full p-2.5" />
              <p className="text-white text-sm font-medium">
                {clientConfig.address}
              </p>
            </div>
            <div className="flex flex-row justify-start items-center">
              <FaPhoneVolume className="text-[40px] mr-5 text-white bg-white bg-opacity-20 rounded-full p-2.5" />
              <p className="text-white text-sm font-medium">
                {clientConfig.phoneNumber}
              </p>
            </div>
            <div className="flex flex-row justify-start items-center">
              <MdEmail className="text-[40px] mr-5 text-white bg-white bg-opacity-20 rounded-full p-2.5" />
              <p className="text-white text-sm font-medium">
                {clientConfig.email}
              </p>
            </div>
            <div className="flex flex-row justify-start items-center">
              <FaGlobeEurope className="text-[40px] mr-5 text-white bg-white bg-opacity-20 rounded-full p-2.5" />
              <p className="text-white text-sm font-medium">
                {clientConfig.website}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactComponent;
