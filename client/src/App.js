import React from "react";
import Navbar from "./components/navbar/Navbar";
import DomainCards from "./components/domain-cards/DomainCards";
// import Newnavbar from "./components/newnavbar/Newnavbar";
import HeaderSection from "./components/headersection/HeaderSection";
import Footers from "./components/footer/Footers";

const cardarr = [
  {
    cardname: "card",
    title: "Problem Solving (Basic)",
    text: "",
    certificatebutton: "Get Certified",
  },
  {
    cardname: "card",
    title: "Python (Basic)",
    text: "",
    certificatebutton: "Get Certified",
  },
  {
    cardname: "card3",
    title: "Stand out from the crowd",
    text: "",
    certificatebutton: "View all certifications",
  },
];
function App() {
  return (
    <div className="Mainbody">
      <Navbar />
      {/* <Newnavbar /> */}
      <HeaderSection />
      <div className="domcard">
        <div className="containner">
          {cardarr.map((card) => (
            <DomainCards
              cardname={card.cardname}
              title={card.title}
              text={card.text}
              certificatebutton={card.certificatebutton}
            />
          ))}
        </div>
      </div>
      {/* <Footers /> */}
    </div>
  );
}

export default App;
