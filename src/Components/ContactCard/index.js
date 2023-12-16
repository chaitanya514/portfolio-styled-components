import React from "react";
import { ContactCardWrapper, myPersonalInfo } from "./styles/ContactCard";

function ContactCard() {
  console.log("myPersonalInfo", myPersonalInfo);
  return (
    <ContactCardWrapper>
      <div>
        {myPersonalInfo?.map((info, index) => {
          <div>{info?.text}</div>;
        })}
      </div>
    </ContactCardWrapper>
  );
}

export default ContactCard;
