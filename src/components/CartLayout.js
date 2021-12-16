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
                  
                  
                </ul>
                <div className="deliveryInfo">
                  <p>258,000월 + 배송비 0원 - 할인 0원 = <b>258,900</b>원(<span className="fontRed">30,000원 이상</span> 무료배송)</p>
              
                </div>
              {/* 상품 리스트 영역 end */}
              </div>
            </div>
          </div>

          {/* 결제예정금액 */}

          <div className="delivery_right">
            <Text className="priceTitle">결제예정금액</Text>

            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품금액</Text>
              <Text className="priceList" align="right" bold color="">298,000 원</Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">배송비</Text>
              <Text className="priceList" align="right" bold>0 원</Text>
            </Grid>
            <Grid className="flexSpaceBetween" padding="0 0 18px 0">
              <Text className="priceList">상품할인금액</Text>
              <Text className="priceList" align="right" bold>0 원</Text>
            </Grid>
            <div className="horiLine"></div>
            <Grid className="flexSpaceBetween" padding="17px 0 18px 0">
              <Text className="priceList">총 2건</Text>
              <Text className="totalTotalPrice" align="right" bold>258,900<span className="won">원</span></Text>
            </Grid>
            <Grid>
              <Button red_btn text="주문하기"/>
              <Button className="giftBtn" text="선물하기"/>
            </Grid>

          </div>
         
       </Normal>
      </>
    );

  }

  if(layout === 'holiday'){
    return(

      <>
        <Normal>
          {/* 배송지 및 주문내역 */}
          <div className="delivery_left">
            
            <div className="noItem">
                <Text size="15px" margin="140px 0 0 0" align="center" color="#333">장바구니에 담긴 상품이 없어요.</Text>
            </div>
          </div>

          {/* 결제예정금액 */}

          <div className="delivery_right">
            <Text className="priceTitle">결제예정금액</Text>

            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품금액</Text>
              <Text className="priceList" align="right" bold color="">0 원</Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">배송비</Text>
              <Text className="priceList" align="right" bold>0 원</Text>
            </Grid>
            <Grid className="flexSpaceBetween" padding="0 0 18px 0">
              <Text className="priceList">상품할인금액</Text>
              <Text className="priceList" align="right" bold>0 원</Text>
            </Grid>
            <div className="horiLine"></div>
            <Grid className="flexSpaceBetween" padding="17px 0 18px 0">
              <Text className="priceList">총 0건</Text>
              <Text className="totalTotalPrice" align="right" bold>0<span className="won"> 원</span></Text>
            </Grid>
            <Grid>
              <Button red_btn text="주문하기"/>
              <Button className="giftBtn" text="선물하기"/>
            </Grid>

          </div>
         
       </Normal>
      </>
    );

  }

  if(layout === 'regular'){
    return(

      <>
        <Normal>
          {/* 배송지 및 주문내역 */}
          <div className="delivery_left">
            
            <div className="noItem">
                <Text size="15px" margin="140px 0 0 0" align="center" color="#333">장바구니에 담긴 상품이 없어요.</Text>
            </div>
          </div>

          {/* 결제예정금액 */}

          <div className="delivery_right">
            <Text className="priceTitle">결제예정금액</Text>

            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품금액</Text>
              <Text className="priceList" align="right" bold color="">0 원</Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">배송비</Text>
              <Text className="priceList" align="right" bold>0 원</Text>
            </Grid>
            <Grid className="flexSpaceBetween" padding="0 0 18px 0">
              <Text className="priceList">상품할인금액</Text>
              <Text className="priceList" align="right" bold>0 원</Text>
            </Grid>
            <div className="horiLine"></div>
            <Grid className="flexSpaceBetween" padding="17px 0 18px 0">
              <Text className="priceList">총 0건</Text>
              <Text className="totalTotalPrice" align="right" bold>0<span className="won"> 원</span></Text>
            </Grid>
            <Grid>
              <Button red_btn text="주문하기"/>
              <Button className="giftBtn" text="선물하기"/>
            </Grid>

          </div>
         
       </Normal>
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
  .noItem {
    width:100%;
    height:262px;
    border:1px solid #ddd;
    border-radius:10px;
    background: url(//static.lotteon.com/p/order/assets/img/icon_no_result_cart.svg) no-repeat;
    background-position:50% 70px;

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
      border-radius:10px 10px 0 0;
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
      border-radius:0 0 10px 10px;
      margin-top:-1px;
      transition:all .35s;
      overflow:hidden;
      
      
    }
    input[id="list01"]:checked + label  {
      border-top:1px solid #ddd;
      border-right:1px solid #ddd;
      border-bottom:1px solid #ddd;
      border-left:1px solid #ddd;
      
      border-radius:10px;
       
     }


    input[id="list01"]:checked + label + div {
      
      height:0;
      min-height:0;
      border:none;
      
     
      
    }
      .newItem {
        width:100%;
        height:auto;
        padding:24px 10px 24px 20px;
        border:1px solid #ddd;
        box-sizing:border-box;

        .newList{border-bottom:1px solid #ddd;}
        .newList:last-child{border-bottom:none;}

        .deliveryInfo{
          padding: 20px;
          background-color:#fef5f4;
          color:#757575;
          font-size:13px;
          letter-spacing:0;
          font-weight:300;
        }
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
    height:355px;
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
    .totalTotalPrice {
      font-size:28px;
      font-weight:700;
      color:#ef2a23;
    }
    .won {
      font-size:22px;
      font-weight:300;
      color:#ef2a23;
    }

    .giftBtn {
      margin-top:8px;
      font-size:13px; 
      height:33px;
    }
    
  }
`;
export default CartLayout;