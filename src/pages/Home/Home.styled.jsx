import styled from '@emotion/styled';

export const HomeContainer = styled.div`
display: flex;
flex-direction:column;
  justify-content: space-between;
  margin: 30px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
padding: 0 20px;
background-color:#f2f2f2;
 
`;

export const HomeTitle = styled.h1`
  text-align: center;
  padding: 20px;
  color: #333;
 
`;

export const MoviesList = styled.ul`
display: flex;

  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
 padding-inline-start: 0;
`;

export const MoviesItem = styled.li`
display: flex;   
justify-content: center;
    flex-direction: column;
border-radius: 8px;
     flex-basis: calc((100% - 90px) / 4);
   background-color: #C0C0A8;
   overflow: hidden;
    transition-duration: 250ms;
  transition-property: scale;
  transition-timing-function: ease-in-out;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);

  &:hover {
    scale: 1.02;
    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),
      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),
      0px 8px 16px rgb(255 247 254 / 35%);}
`;

export const MoviesImg = styled.img`
   width: 100%;

`;

export const MoviesTitle = styled.p`
    height: 50px;
    color: #333;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
    padding-top:10px;
    &:hover {
      color: red;
      font-weight: 800;
      font-size: 15px;
    }
}`;