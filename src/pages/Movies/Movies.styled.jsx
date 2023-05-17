import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';


export const MoviesContainer = styled.div`

  margin: 30px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
padding: 20px 20px;
`;

export const MoviesForm = styled.form`
display:flex;
justify-content: center;
margin: 15px 0 30px 0;

  
`;

export const MoviesInput = styled.input`
    display: inline-block;
    width: 250px;
    border: 10px soled #ccc;
    font-size: 20px;
    font-weight: 600;
   border-radius: 5px;
    outline: none;
    margin-right:20px;
    padding-left: 20px;
    padding-right: 4px;
    background-color: rgba(55, 25, 87, 0.463);
    color: black;

`;
export const MoviesSearchBtn = styled.button`
display: inline-block;
    width: 48px;
    height: 48px;
   border: 3px soled #ccc;
    border-radius: 5px;
   
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    cursor: pointer;
    outline: none;
    background-color: rgb(255, 189, 42);

  }
  
`;

export const ItemImg = styled.img`
 width: 100%;
 height: 370px;
    
   
`;

export const ItemTitle = styled.p`
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

export const MoviesItem = styled.li`
 border-radius: 8px;
   display: flex;   
justify-content: center;
    flex-direction: column;
border-radius: 8px;
     flex-basis: calc((100% - 90px) / 4);
    overflow: hidden;
  
   background-color: #C0C0A8;
   
    transition-duration: 250ms;
  transition-property: scale;
  transition-timing-function: ease-in-out;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);

  &:hover {
    scale: 1.02;
    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),
      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),
      0px 8px 16px rgb(255 247 254 / 35%);
  }
`;
export const MoviesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding-inline-start: 0;
}`;