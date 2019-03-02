import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  margin-top: 200px;
  background: linear-gradient(to bottom, #33ccff 0%, #3f0122 100%);
  border: 2px solid #3f0122;
  align-items: center;
  font-size: 1.8rem;
  autocomplete: off;

  input,
  textarea {
    margin: 20px 2%;
    padding: 10px;
    width: 60%;
    border-radius: 5px;
    outline: none;

    :focus {
      border: 2px solid #3f0122;
    }
  }

  input {
    text-overflow: ellipsis;
  }
`

export const Button = styled.button`
  width: 30%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  :hover {
    background: linear-gradient(to bottom, #33ccff 0%, #3f0122 100%);
    color: white;
  }
`
