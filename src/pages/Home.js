import React from 'react'
import HeroComponent from '../components/HeroComponent'
import heroPicture from "../assets/gym-banner.jpg"
import ImageAndContentComponent from '../components/ImageAndContentComponent'


function Home() {
  return (
    <div >

      <HeroComponent height={800}
      title="STAY IN SHAPE GYM"
      description={"Bine ati venit la Stay in Shape Gym, locul unde transformam fiecare antrenament intr-o calatorie spre sanatate si bunastare. Intr-o atmosfera prietenoasa si motivanta, va ajutam sa va atingeti obiectivele de fitness si sa va simtiti mai bine in corpul vostru."}
      backgroundImage={heroPicture}
      buttonText="Contact"
      url="/contact"
      />
      
      <ImageAndContentComponent
      // type="reverse"
      title="Alege o viata sanatoasa"
      description="Sala de fitness este un spatiu dedicat imbunatatirii sanatatii si a starii fizice a persoanelor. Aceasta este echipata cu diverse echipamente specializate pentru antrenament, precum: benzi de alergat, biciclete stationare, aparate de ridicat greutati, gantere, mingi de exercitii si alte accesorii. In plus, sala de fitness poate oferi si clase de antrenament in grup sau antrenori personali pentru a ajuta clientii sa-si atinga obiectivele de fitness. Este un mediu activ, motivant si sigur, in care oamenii se pot antrena si isi pot imbunatati sanatatea generala, forta musculara, flexibilitatea si rezistenta cardiovasculara." 
      sectionImage="https://magneticfit.ro/wp-content/uploads/2022/08/sala-de-fitness-echipament-scaled.jpg"
      buttonText="Despre noi"
      buttonGoToPage="/about"
      />
    </div>
  )
}

export default Home