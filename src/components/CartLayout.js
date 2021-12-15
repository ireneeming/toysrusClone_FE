import React from 'react';
import styled from 'styled-components';
import {Grid,Text,Input, Button,Images} from '../elements/index';
import Count from '../shared/Count';

const CartLayout = (props) => {
  
const {layout} = props;

  if(layout === 'normal'){
    return(

      <>
       <Normal>
          {/* 배송지 및 주문내역 */}
          <div className="delivery_left">
            <div className="Homeaddress flexSpaceBetween" >
              <Text>배송지 주소</Text>
              <button>배송지 설정 </button>
            </div>
            <div className="cartWrap accordion">
              <input type="checkbox" id="list01" ></input>
              <label htmlFor="list01">
                롯데마트 <span>매장택배 | 계양점</span> <em></em></label>
              <div className="newItem">
                {/* 상품 리스트 li 영역 start */}
                <ul> 
                  <li className="newList"> 
                    <div className="newItemDetail">
                      <input type="checkbox" />
                      <label>
                        시크릿 쥬쥬
                      </label>
                      <div className="titleDetailWarp flexStart alignitemT">
                        <div className="imgDetail">
                          <img src="https://contents.lotteon.com/itemimage/_v230000/LM/88/01/19/80/62/68/7_/00/1/LM8801198062687_001_M.jpg/dims/resizemc/100x100" alt="" /></div>
                        <div className="titleDetail">
                          <p>상품명</p>
                          <p>단일상품 혹은 상품 갯수 정하기 </p>
                        </div>
                      </div>
                      <div className="count">
                        <Count cart></Count>   
                      </div>
                      <div className="totalPrice">전체 금액</div>
                    </div>
                  </li>
                  <li className="newList">
                    
                    <div className="newItemDetail">
                      <input type="checkbox" />
                      <label>
                        시크릿 쥬쥬
                      </label>
                      <div className="titleDetailWarp flexStart alignitemT">
                        <div className="imgDetail">
                          <img src="https://contents.lotteon.com/itemimage/_v230000/LM/88/01/19/80/62/68/7_/00/1/LM8801198062687_001_M.jpg/dims/resizemc/100x100" alt="" /></div>
                        <div className="titleDetail">
                          <p>상품명</p>
                          <p>단일상품 혹은 상품 갯수 정하기 </p>
                        </div>
                      </div>
                      <div className="count">
                        <Count cart></Count>   
                      </div>
                      <div className="totalPrice">전체 금액</div>
                    </div>
                  </li>
                  <li className="newList">
                    
                    <div className="newItemDetail">
                      <input type="checkbox" />
                      <label>
                        시크릿 쥬쥬
                      </label>
                      <div className="titleDetailWarp flexStart alignitemT">
                        <div className="imgDetail">
                          <img src="https://contents.lotteon.com/itemimage/_v230000/LM/88/01/19/80/62/68/7_/00/1/LM8801198062687_001_M.jpg/dims/resizemc/100x100" alt="" /></div>
                        <div className="titleDetail">
                          <p>상품명</p>
                          <p>단일상품 혹은 상품 갯수 정하기 </p>
                        </div>
                      </div>
                      <div className="count">
                        <Count cart></Count>   
                      </div>
                      <div className="totalPrice">전체 금액</div>
                    </div>
                  </li>
                </ul>
              {/* 상품 리스트 영역 end */}
              </div>
            </div>
          </div>

          {/* 결제예정금액 */}

          <div className="delivery_right">
            <Text className="priceTitle">결제예정금액</Text>

            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품금액</Text>
              <Text className="priceList" align="right" bold color="">298,000원</Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">배송비</Text>
              <Text className="priceList" align="right" bold>0원</Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품할인금액</Text>
              <Text className="priceList" align="right" bold>0원</Text>
            </Grid>
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
display:flex;
justify-content:space-between;

  .delivery_left{
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
    .list01 span{
      font-size:12px;
    }
    
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
      min-height:100px;
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
      height:0;
      min-height:0;
      
     
      
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

  }
  .delivery_right {
    width:300px;
    height:385px;
    border:1px solid #ddd;
    border-radius:10px;
    padding:24px 20px 20px 20px;
    box-sizing:border-box;

    .priceTitle{
      font-size:20px; 
      line-height:1.4;
      margin-bottom:28px;
    }
    .priceList {
      display:block;
      width:50%;
      font-size:14px;
      color:#757575;
      padding-top:3px;
      line-height:1.57;
      

    }
    
  }
`;
export default CartLayout;