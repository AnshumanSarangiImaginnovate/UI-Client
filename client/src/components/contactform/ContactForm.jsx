import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    // <div className="containners">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <LocationOnIcon className="icons" />
          <div className="topic">Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <LocalPhoneIcon className="icons" />
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 4343 5678</div>
        </div>
        <div className="email details">
          <EmailIcon className="icons" />
          <div className="topic">Email</div>
          <div className="text-one">email@gmail.com</div>
          <div className="text-two">ex@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          </div>
          <div>
            spaperiam inventore ullam earum rerum neque eligendi iusto, delectus
          </div>
          <div>magnam ipsum quaerat officiis laborum!</div>
        </p>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box message-box">
            <textarea placeholder="Enter your message"></textarea>
          </div>
          <div className="button">
            <input type="button" value="Send Now" />
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default ContactForm;
