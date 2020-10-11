import styled from "styled-components";


const Form = styled.form`
  background-color: #ffffff;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
`;
Form.Box = styled.div`
  background-color: #1c6ea4;
  display: flex;
  justify-content: center;
`;
Form.Button = styled.button`
border: none;
background-color: inherit;
padding-right: 10px;
opacity: 0.7;
cursor: pointer;
`;
Form.Input = styled.input`
font-size: 16px;
width: 300px;
border: none;
outline: none;
`;
export default Form;