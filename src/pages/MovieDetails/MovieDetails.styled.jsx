import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailsContainer = styled.div`
      padding: 32px 0px;
    display: flex;
    gap: 36px;
}
`;

export const Container = styled.div`

   margin: 30px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
padding: 20px 20px;
background-color:#f2f2f2;
  
`;
export const HelpContainer = styled.div`
     display: flex;
    flex-direction: column;
    // gap: 20px;
}
 
`;

export const ContainerForImgAndDescription = styled.div`
  display: flex;
`;

export const MoviesIdImg = styled.img`
  height: 500px;
  margin: 30px;
  margin-top: 50px;
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 700px;
`;

export const AdditionalInfo = styled.div`
 
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AdditionalLink = styled(Link)`
font-size: 24px;
    font-weight: 800;
    color: #212121;
    &:hover{
      color: red;
    }
`;

export const LoaderContainer = styled.div`
  margin-top: 50px;
`;

export const BackLink = styled(Link)`
  padding: 0px;

  color: black;
      margin: 30px;
   
  font-size: 24px;
    font-weight: 800;
  top: 0;
  left: 0;
  &:hover {
    color: red;
  }
`;


export const DetailsText = styled.p`
font-size: 22px;
    font-weight: 600;
    color: black;
    margin:0;
   margin-bottom: 25px;
}`;

export const DetailsTitle = styled.h3`
font-size: 24px;
    font-weight: 800;
    color: black;
    margin: 0px;
    margin-bottom: 5px;
    
   
}`;
