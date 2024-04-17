import React from "react";
import FullBgWithContentComponent from "../components/FullBgWithContentComponent";
import HeroComponent from "../components/HeroComponent";

function About() {
  return (
    <div className="min-h-screen">
      <FullBgWithContentComponent
        title="Despre noi"
        description="Bine ati venit la Stay in Shape Gym, locul unde transformam fiecare antrenament intr-o calatorie spre sanatate si bunastare. Intr-o atmosfera prietenoasa si motivanta, va ajutam sa va atingeti obiectivele de fitness si sa va simtiti mai bine in corpul vostru."
        description2="
    Stay in Shape Gym este o destinatie de top pentru cei care doresc sa isi imbunatateasca starea de sanatate si sa-si tonifice corpul. Cu o echipa de antrenori calificati si o gama variata de echipamente moderne, ne straduim sa oferim clientilor nostri cea mai buna experienta de fitness posibila."
        backgroundImage="https://www.bega-shoppingcenter.ro/wp-content/uploads/2020/11/86501349_154567079332778_4216694987363975168_o.jpg"
        type="reverse"
      />
      <div className="py-[5%]">
        <HeroComponent
          height={500}
          backgroundImage="https://raportuldegarda.ro/wp-content/uploads/2018/02/greutati.jpg"
          title="Esti interesat? Vezi cu ce ne ocupam!"
          buttonText="Servicii"
          url="/services"
        />
      </div>
    </div>
  );
}

export default About;
