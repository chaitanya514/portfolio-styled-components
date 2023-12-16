import { BsPhone } from "react-icons/bs";
import styled from "styled-components";

export const myPersonalInfo = [
  {
    icon: BsPhone,
    text: "phone",
    info: "+1 7058085653",
  },

  {
    icon: "Email",
    text: "Email",
    info: "patelchaitanya514@gmail.com",
  },
  {
    icon: "Location",
    text: "Location",
    info: "Toronto,Canada",
  },
];

export const ContactCardWrapper = styled.div`
  background: #f2f5f9;
  margin-top: 20px;
  justify-content: center;
  display: flex;
`;

export const MyInfoList = styled.div`
  display: flex;
`;
