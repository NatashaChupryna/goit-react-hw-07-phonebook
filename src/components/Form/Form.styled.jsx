import styled from '@emotion/styled';


export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  margin: 0;
`
export const Button = styled.button`
  width: 150px;
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid black;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms;
  :hover {
    background-color: red;
    color: white;
  }
`;
export const NameInput = styled.input`
  margin-left: 25px;
  :focus-visible {
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
  }
`;
export const NumberInput = styled.input`
  margin-left: 10px;
  :focus-visible {
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
  }
`;