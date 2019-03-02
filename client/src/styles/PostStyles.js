import styled from "styled-components"

export const PostsWrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  border: 1px solid #3f0122;
  border-radius: 5px;
  width: 44%;
  font-size: 1.8rem;
  padding: 10px;
  margin: 3%;
  height: 100%;
`

export const Info = styled.div`
  margin-bottom: 15px;
  span {
    font-size: 2rem;
    color: #33ccff;
    width: 20%;
  }
  p {
    margin-top: 10px;
    overflow-wrap: break-word;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  width: 20%;
  margin-bottom: 0;

  i {
    margin: 10px;
    color: #33ccff;
    cursor: pointer;
    :hover {
      color: #3f0122;
    }
  }
`
