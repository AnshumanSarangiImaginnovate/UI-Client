import React from "react";
import "./Navbar.scss";
import CustomButton from "../custom-button/CustomButton";

function App() {
  return (
    <div className="container-nav">
      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="menu">
          <ul className="menu-options">
            <li className="menu-item">
              <a href="#">Prepare</a>
            </li>
            <li className="menu-item">
              <a href="#">Certify</a>
            </li>
            <li className="menu-item">
              <a href="#">Compete</a>
            </li>
            <li className="menu-item">
              <a href="#">Apply</a>
            </li>
          </ul>
        </div>
        <div className="login-menu">
          <CustomButton varient="filled" size="sm" className="login">
            Log in
          </CustomButton>
          <CustomButton varient="filled-dark" size="sm" className="signup">
            Sign Up
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import "./Navbar.scss";
// import CustomButton from "../custom-button/CustomButton";

// function App() {
//   return (
//     <div className="containner-nav">
//       <div className="navbar">
//         <div className="logo">LOGO</div>
//         <div className="menu">
//           <ul className="menu-options">
//             <li className="menu-items">
//               <a href="#">Prepare</a>
//             </li>
//             <li className="menu-items">
//               <a href="#">Certify</a>
//             </li>
//             <li className="menu-items">
//               <a href="#">Compete</a>
//             </li>
//             <li className="menu-items">
//               <a href="#">Apply</a>
//             </li>
//           </ul>
//         </div>
//         <div className="loginmenu">
//           <CustomButton varient="filled" size="sm" className="login">
//             Log in
//           </CustomButton>
//           <CustomButton size="sm" varient="filled-dark" className="singup">
//             Sing Up
//           </CustomButton>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
