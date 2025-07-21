import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Input, TextArea } from "react-aria-components";
import contact_us_image from "../assets/images/contact_us.svg";

export const ContactUsPage = () => {
  return (
    <div>
      <PageHeader title="Contact us" />
      <div className="wrapper contact-us-main-container">
        <div className="contact-us-image-container">
          <img src={contact_us_image} alt="" />
        </div>
        <div className="contact-us-form-container">
          <form>
            <h2>Let's get you connected</h2>
            <div className="contact-us-form-input-container">
              <label>Name</label>
              <div className="name-inputs-container">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
            </div>
            <div className="contact-us-form-input-container">
              <label>Email</label>
              <Input type={"email"} placeholder="Email address" />
            </div>
            <div className="contact-us-form-input-container">
              <label>Massage</label>
              <TextArea placeholder="Enter your Massage..." />
            </div>
            <button className="contact-us-form-submit">
              <span>submit {"->"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
