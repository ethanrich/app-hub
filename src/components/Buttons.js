import styled from "styled-components";


const theme = {
    green: {
      default: "#47cc97",
      hover: "#449172"
    },
    red: {
        default: "#eb7a85",
        hover: "#914d54"
      },
    orange: {
        default: "#f0d67f",
        hover: "#9c8a54"
    },
    blue: {
        default: "#47adcc",
        hover: "#5585a3"
    },
    violet: {
        default: "#ed7dfa",
        hover: "#9b53a3"
    }
  };
  
const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  font-size: 24px;
  padding: 10px 10px;
  border-radius: 20px;
  margin: 30px 30px;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  cursor: pointer;
`;

  export default Button