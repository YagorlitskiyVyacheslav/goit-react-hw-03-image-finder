import styled from "styled-components";


const List = styled.ul`
  display: grid;
  width: 1200px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-auto-rows: 240px;
  grid-gap: 12px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
List.Item = styled.li`
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    cursor: pointer;
`;
List.Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;


export default List;