import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

export const mediaIcons = [
  {
    linkedIn: (
      <IconContext.Provider
        value={{ style: { fontSize: "20px", color: "rgb(0, 123, 255)" } }}
      >
        <div>
          <BsLinkedin />
        </div>
      </IconContext.Provider>
    ),
  },

  {
    linkedIn: (
      <IconContext.Provider
        value={{ style: { fontSize: "20px", color: "rgb(0, 0, 0)" } }}
      >
        <div>
          <BsGithub />
        </div>
      </IconContext.Provider>
    ),
  },
];

// Create a Wrapper component that'll render a <section> tag with some styles
export const ContainerWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr;
  margin: 0 35px;
`;

export const Text = styled.h1`
  color: red;
`;

export const SocialMediaLists = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 50px;
`;

export const SocialCube = styled.div`
  background: #f2f7fc;
  padding: 10px;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 5px;
  border-radius: 10px;
  justify-content: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
