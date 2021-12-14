import React from 'react';
import styled from 'styled-components';
import {Grid,Text,Input, Button,Images} from '../elements/index';

const CartLayout = (props) => {
  
const {layout} = props;

  if(layout === 'normal'){
    return(

      <>
       <Normal>
          <div className="Homeaddress flexSpaceBetween" >
            <Text>배송지 주소</Text>
            <button>배송지 설정 </button>
          </div>
          <div className="cartWrap accordion">
            <input type="checkbox" id="list01"></input>
            <label htmlFor="list01">리스트 목록<em></em></label>
            <div className="newItem">
             <ul>
               <li className="newList">
                 
                 <div className="newItemDetail">
                  <input type="checkbox" />
                  <label>
                    시크릿 쥬쥬
                  </label>
                   <div className="titleDetailWarp flexStart alignitemT">
                    <div className="imgDetail"><img src="https://contents.lotteon.com/itemimage/_v230000/LM/88/01/19/80/62/68/7_/00/1/LM8801198062687_001_M.jpg/dims/resizemc/100x100" alt="" /></div>
                    <div className="titleDetail">
                      <p>상품명</p>
                      <p>단일상품 혹은 상품 갯수 정하기 </p>
                    </div>
                   </div>
                   <div className="count">갯수 </div>
                   <div className="totalPrice">전체 금액</div>
                 </div>
               </li>
             </ul>
            </div>
          </div>
          

       </Normal>
      </>
    );

  }

  if(layout === 'holiday'){
    return(

      <>
        <Text>명절배송</Text>
        <Button text="전체 선택"></Button>
        <Button text="품절상품 삭제"></Button>
        <Button text="선택삭제"></Button>
      </>
    );

  }

  if(layout === 'regular'){
    return(

      <>
        <Text>정기배송</Text>
        <Button text="전체 선택"></Button>
        <Button text="품절상품 삭제"></Button>
        <Button text="선택삭제"></Button>
      </>
    );

  }
}

const Normal = styled.div`
  width:786px;

  .Homeaddress{
    width:100%;
    border-bottom:1px dashed #ccc;
    margin:0 0 40px 0;
    padding:0 0 20px 0;

      button{
        border:none;
        background:none;
      }
  }

  .accordion{
    
    input[id="list01"]{
      display:none;
    }
    input[id="list01"]+label{
      position:relative;
      display:block;
      padding:20px;
      border:1px solid #ddd;
      cursor:pointer;
      border-radius:10px;
    }
    input[id="list01"]+label em {
      position:absolute;
      top:50%;
      right:10px;
      width:30px;
      height:30px;
      margin-top:-15px;
      background:#ddd;
    }
    input[id="list01"]+label + div{
      height:0;
      padding:0;
      
      
      transition:all .35s;
      overflow:hidden;
      
      
    }
    input[id="list01"]:checked + label  {
      border-top:1px solid #ddd;
      border-right:1px solid #ddd;
      border-bottom:1px solid #ddd;
      border-left:1px solid #ddd;
      
      border-radius:10px 10px 0 0;
       
     }


    input[id="list01"]:checked + label + div {
      border-right:1px solid #ddd;
      border-bottom:1px solid #ddd;
      border-left:1px solid #ddd;
      border-radius:0 0 10px 10px;
      height:200px;
     
      
    }
      .newItem {
        width:100%;
        height:auto;
        padding:24px 10px 24px 20px;
        border:1px solid #bbb;
        box-sizing:border-box;
      }
      .newItem label {
        display:none;
        text-indent:-999;
      }
      .newItemDetail {
        display:flex;
        justify-content:flex-start;
        padding:24px 10px 24px 20px;

        .titleDetailWarp {
          margin:0 10px;

          .titleDetail{
           width:230px;
            margin:0 10px;
          }
          .imgDetail {
            width:80px;
            height:80px;
            overflow:hidden;
            border-radius:10px;
          }
        }

        .count {
          min-width:140px;
          padding:0 20px;
          text-align:center;
          border-left:1px solid #eee;
          border-right:1px solid #eee;
        }
        .totalPrice {
          min-width:160px;
          padding:0 20px;
          text-align:center;
        }
      
      }
  }

`;
export default CartLayout;