import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import DomainCards from "./components/domain-cards/DomainCards";
// import Newnavbar from "./components/newnavbar/Newnavbar";
import HeaderSection from "./components/headersection/HeaderSection";
import Footers from "./components/footer/Footers";

import ProblemsListPage from "./pages/ProblemsListPage";

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
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/hero" element={<HeaderSection />} />
        <Route path="/problems" element={<ProblemsListPage />} />
        {/* <Route>404 Not Found!</Route> */}
      </Routes>
    </Router>
    // <div className="Mainbody">
    //   <Navbar />
    //   {/* <Newnavbar /> */}
    //   <HeaderSection />
    //   <div className="domcard">
    //     <div className="containner">
    //       {cardarr.map((card) => (
    //         <DomainCards
    //           cardname={card.cardname}
    //           title={card.title}
    //           text={card.text}
    //           certificatebutton={card.certificatebutton}
    //         />
    //       ))}
    //     </div>
    //   </div>
    //   {/* <Footers /> */}
    // </div>
  );
}

export default App;
