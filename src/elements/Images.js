import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const {logo, _onClick} = props;
  const styles={
    
  };

  if(logo){
    return(
      <>
     <LogoImg onClick={_onClick}></LogoImg>
      </>
    );

  }

  return(
    <>
   <ImageDefault></ImageDefault>
    </>
  );
}

Image.defaultProps = {
  src:"http://3.35.140.5/gobchang-1639031423467.jpg",
  _onClick: () => {},
}

const ImageDefault = styled.img`


`;

const LogoImg = styled.div`
  width:200px;
  height:38px;
  background:url("https://static.lotteon.com/p/common/foCommon/assets/img/logo_toysrus@2x.png") no-repeat;
  background-size:contain;
  
`;
export default Image;
