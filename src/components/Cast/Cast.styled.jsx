import styled from '@emotion/styled';

export const CastList = styled.ul`
   display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style-type: none;
    margin: 20px 0;
    padding-left: 10px;
     
}`;

export const CastItem = styled.li`

   border-radius: 8px;
     flex-basis: calc((100% - 90px) / 4);
    overflow: hidden;
   background-color: #C0C0A8;

   
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px -2px, rgba(0, 0, 0, 0.1) 0px 6px 12px;
     &:hover {
    scale: 1.02;
    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),
      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),
      0px 8px 16px rgb(255 247 254 / 35%);}
`;

export const CastItemImg = styled.img`
 width: 100%;
 height:270px;

`;

export const CastText = styled.p`
   
    color: #333;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    padding-top:10px;
  
}`;
export const CastName = styled.h3`
    
    color: #333;
    text-align: center;
    font-size: 18px;
    font-weight: 600;

   
}`;
