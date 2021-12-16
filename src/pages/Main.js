import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import { Grid, Text, Button, Images } from '../elements/index'
import { VideoPlayer } from 'react-video-players'
import ReactPlayer from 'react-player'
import LimitProduct from '../components/LimitProduct'
import BranchIcon from '../components/BranchIcon'
import MainTitle from '../components/MainTitle'
import Item from '../components/Item'
import MainBanner from '../components/MainBanner'
import CountDown from '../components/CountDown'
import Christmas from '../components/Christmas'
import Header from '../components/Header'
import Footer from '../shared/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../redux/configureStore'

import { actionCreators as itemActions } from '../redux/modules/item'
import ChristmasBanner from '../components/ChristmasBanner'

import 'swiper/swiper.min.css'

import 'swiper/components/pagination'
import 'swiper/components/navigation'
import 'swiper/components/autoplay'
import 'swiper/components/navigation/navigation.min.css'

SwiperCore.use([Pagination, Navigation])

const Main = (props) => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.item.list)
  console.log('이거', list)
  const recommend_list = useSelector((state) => state.item.recommend_list)

  const christmas_list = list.christmasProducts
  const hot_list = list.hotProducts

  const timeLimit_list = list.timeLimitProducts

  const hoursMinSecs = { hours: 5, minutes: 20, seconds: 40 }

  React.useEffect(() => {
    dispatch(itemActions.getItemSP())
  }, [])

  return (
    <>
      <Header />
      <Grid contentWrap padding="45px 0 0 0">
        <MainTitle />
        <MainBanner />

        {/********* 쿠폰 *********/}
        <Grid className=" ovfHidden borderRadius-10 marginTB-15" background="rgb(255, 137, 59)" align="center">
          <Images
            width="auto"
            height="84px"
            src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000011/195432/PB93C75EFEFD55DE9D61830E54EE30D83F7F296D43D198C9C13EA8ED552085E9E/file/dims/optimize"
          />
        </Grid>

        {/******** 한정수량특가 타임*********/}

        <MainTitle src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000017/192972/PDCAC3C667996E571F0357870FD0ABE93C48C4CB5B7175F8C3320D8B4A753C117/file/dims/optimize" />

        <EventLimit className="ovfHidden borderRadius-10 marginTB-15">
          <LeftTime>남은시간</LeftTime>
          <DivTime>
            <CountDown hoursMinSecs={hoursMinSecs} />
          </DivTime>
        </EventLimit>
        {/********* 한정수량특가 이미지 슬라이드 *********/}
        <Grid className="paddingTB-15 flexSpaceBetween">
          {timeLimit_list &&
            timeLimit_list.map((list, idx) => {
              if (idx < 2) {
                return (
                  <Grid
                    width="49%"
                    _onClick={() => {
                      history.push(`/item/${list.itemId}`)
                    }}
                  >
                    <LimitProduct key={list.itemId} {...list} />
                  </Grid>
                )
              }
            })}
        </Grid>

        {/******** 브랜치 아이콘 *********/}
        <Grid width="520px" margin="0 auto" align="center" flex="flex;justify-content:space-between;" padding="15px 0">
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/66471/PA03BB454A7A80C2ED70B8C662D5526A82AB0DFDDFD895F90E86FAC09E0566824/file/dims/optimize" text="롯데마트" />
          <BranchIcon
            src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/66470/PE2090EC952EC225303867B01DA0267692680FF816D66750FBAE7FFD9E26772E6/file/dims/optimize"
            text="토이 아울렛"
          />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/66469/P40168248E0849C88E66FCFD2388C55B2DE5CDD5CBFC108B11701C7646768E32C/file/dims/optimize" text="무료배송" />
          <BranchIcon
            src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/66468/P97F5B9D7678C852F4C55C502ADEF8971C828B471109A2F623E57CC8A928DA585/file/dims/optimize"
            text="이벤트&쿠폰"
          />
        </Grid>

        {/******** 금주의 TOY TV *********/}
        <MainTitle src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000017/192988/PE6E1D3627C59951BC25401579693493E9212BEC3BBAC03F972A171F371694C1D/file/dims/optimize" />
        {/* video 넣는 방법 알아보기 */}

        <Grid flex="flex">
          <Grid width="906px;" background="#f8f8f8" margin="0 auto" className="borderRadius-10">
            <Grid width="100%;" height="516px">
              <ReactPlayer width="100%" height="516px" url="https://www.youtube.com/embed/jYf6iEEZDho" />
            
             
            </Grid>
            <Grid flex="flex">
              <Grid width="50%" padding="20px;" flex="flex">
                <Images borderRadius="10px" width="auto" height="72px" src="https://contents.lotteon.com/itemimage/LM/06/30/50/99/26/56/5_/00/1/LM0630509926565_001_1.jpg/dims/resizef/72x72" />
                <Grid margin="10px 0 0 20px;">
                  <Text><b>너프</b> 너프 울트라 THREE</Text>
                  <Text margin="10px 0 0 0;"><b>35,900</b> <span className="mainwon">원</span></Text>
                </Grid>
              </Grid>
              <Grid width="50%" padding="20px;" flex="flex">
                <Images borderRadius="10px" width="auto" height="72px" src="https://contents.lotteon.com/itemimage/_v070642/LM/06/30/50/99/47/95/9_/00/1/LM0630509947959_001_1.jpg/dims/resizef/72x72" />
                <Grid margin="10px 0 0 20px;">
                  <Text><b>너프</b> 너프 엘리트 2.0 피닉스</Text>
                  <Text margin="10px 0 0 0;"><b>23,900</b> <span className="mainwon">원</span></Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <More >타요 더보기 &gt;</More>
        {/******** 크리스마스 선물 인기 브랜드 *********/}
        <MainTitle src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000017/193008/P543775D9C398E6E4B25CBA3E9364DE557318AF4D4BE9707F710AF01C66636068/file/dims/optimize" />
        <Grid width="520px" margin="0 auto" align="center" flex="flex;justify-content:space-between;flex-wrap:wrap" padding="15px 0">
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196512/P418FD5E1AC4DE46236D6376F39018449ED3892E5C3BEFDE4D929ECE97CFE6DA2/file/dims/optimize" text="레고" />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196511/PC0B5AAD536D08EFDD906E9E906D96A67C0A02E53A825E7DAE182F8032C9184BA/file/dims/optimize" text="닌텐도" />
          <BranchIcon
            src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196439/PADB52BB2E510924235A9676090FEAC86FBD79AB0A258EA2021F29232CDDE1A63/file/dims/optimize"
            text="플레이스테이션"
          />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196509/PB5573C610DA4F3D10EE2B6934CD6292BA5D4A5CE4BFD01FB6A06EC4ABEE04F75/file" text="헬로카봇" />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196541/PD82BEDF948CE25684DE6EAC4EF8F40B332D544A92D323F4AE448E1ED0C024C4B/file/dims/optimize" text="포켓몬" />
          <BranchIcon
            src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196543/PBEFFC882C5947EA21E8179E3A4F361820D8EA544BAF1A460581737BB99EF989F/file/dims/optimize"
            text="신비아파트"
          />
          <BranchIcon
            src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196545/PDDE233B84497B1502F92350472AF04F5E106CB42796CCBF32430E6A2D64E85A6/file/dims/optimize"
            text="실바니안패밀리"
          />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196547/P057FBC380429812F1915AB6B4562D963753E3AAA09EAB829CCF86DDBD4E7EDD6/file" text="미미월드" />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196558/P883989A9A03578948F659118B40900F77EFDE16FD9013578DE644E18C0940155/file" text="콩순이" />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196560/P3B90BE920A371F9CA517E2C6351F81C96FAB0FFA970A4E4896E8F92DE93DD412/file" text="시크릿쥬쥬" />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196562/P54D0F7FDA2AABCB5F3EF5FB398C4B27E4A45BBBADEF9B90A124C1C17D7ABA545/file" text="타요" />
          <BranchIcon src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/196564/P5204F49544E509D3B59DBA8353C05CE65A15806C4CEFD862E6CE7B4C42B87F19/file" text="뽀로로" />
        </Grid>
        <MainTitle src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000017/65241/P558A577AB0BF2881F8EC3D14B3A20C0EAE3E3E4FDB9D85F7E5903E14994F53DC/file/dims/optimize" />
      </Grid>

      <Grid
        margin="10px 0px 0px 0px"
        width="100%;"
        height="515px"
        background="url('https://contents.lotteon.com/display/dshoplnk/31650/2/M000084/196572/PD52047A4873003579A1520B17C029FA57D042D0621423C5304C640B165DA930C/file') no-repeat;background-size:100%;"
      >
        {/******** 크리스마스 추천 선물 *********/}
        <Grid contentWrap>
          <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={3} navigation={{ clickable: true }} loop={true}>
            <SwiperButton></SwiperButton>
            <SwiperButtonR></SwiperButtonR>
            <Wrap>
              {christmas_list &&
                christmas_list.map((list) => {
                  return (
                    <SwiperSlide>
                      <Christmas key={list.itemId} {...list}></Christmas>
                    </SwiperSlide>
                  )
                })}
            </Wrap>
          </Swiper>
        </Grid>
        
      </Grid>
      <More >🎁추천 선물 더보기 &gt;</More>
      <Grid contentWrap>
        {/******** 지금 핫한 신상품 *********/}
        <MainTitle src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000017/193018/PFAFDE167221465811CBABF99EA29D783408E3BBE21565AB0B3C67B0D527A7250/file/dims/optimize" />
        <Grid margin="15px 0px 0px 0px" width="100%;" className="flexStart" flex="flex;flex-wrap:wrap;">
          {hot_list &&
            hot_list.map((list) => {
              return (
                <Grid
                  cursor
                  width="360px"
                  height="434px"
                  margin="0px 10px"
                  _onClick={() => {
                    history.push(`/item/${list.itemId}`)
                  }}
                >
                  <Item three key={list.itemId} {...list} />
                </Grid>
              )
            })}
        </Grid>

        {/******** 지금 꼭 사야할 추천상품*********/}
        <MainTitle src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000017/193019/P0D144AD621E8712B2C661122CF521C131D1FEAAB22A69DA20097E97A8E0329C8/file/dims/optimize" />
        <Grid margin="30px 0px"></Grid>
        <Grid width="100%;" className="flexStart" flex="flex;flex-wrap:wrap;">
          {recommend_list &&
            recommend_list.map((list, idx) => {
              return (
                <Grid
                  cursor
                  width="285px"
                  height="374px"
                  _onClick={() => {
                    history.push(`/item/${list.id}`)
                  }}
                >
                  <Item key={list.id} {...list} />
                </Grid>
              )
            })}
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

const Wrap = styled.div`
  position: relative;
  padding-top: 66px;
  max-width: 1140px;
  height: 545px;
  display: flex;
  overflow: hidden;
  vertical-align: center;
  margin: 0 auto;
`

const SwiperButton = styled.button`
  position: absolute !important;
  border: 1px solid #ddd;
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  left: -19px;
  top: 161px;
  margin: 0;
  z-index: 100;
  background: hsla(0, 0%, 100%, 0.9)
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAF9JREFUSA1jYBgFoyFAwxDIApotSkPzUYwGWfYfiK8AMV0sBVkCsmzUUmAgUB+MBi/1wxTJRJKDlwlJ86Bnkuw7Snw0ahkloQfXO3yDEeRFuldPMEtBwToKRkOAviEAALs9KkKjAObtAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 16px auto;
  transform: rotate(-180deg);
  opacity: 1;
`

const SwiperButtonR = styled.button`
  position: absolute !important;
  border: 1px solid #ddd;
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  right: -19px;
  top: 161px;
  margin: 0;
  z-index: 100;
  background: hsla(0, 0%, 100%, 0.9)
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAF9JREFUSA1jYBgFoyFAwxDIApotSkPzUYwGWfYfiK8AMV0sBVkCsmzUUmAgUB+MBi/1wxTJRJKDlwlJ86Bnkuw7Snw0ahkloQfXO3yDEeRFuldPMEtBwToKRkOAviEAALs9KkKjAObtAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 16px auto;
  opacity: 1 !important;
`

const DivTime = styled.div`
  font-size: 64px;
  color: #fff;
`

const EventLimit = styled.div`
  height: 188px;
  box-sizing: border-box;
  background: url('https://static.lotteon.com/p/display/plugin/assets/img/dummy_img_d_timedeal_01_01_343x100.png') no-repeat;
  background-size: 100%;
  background-position-y: center;
  text-align: center;
  padding-top: 40px;
`

const LeftTime = styled.p`
  display: inline-block;
  background: url('https://static.lotteon.com/p/display/plugin/assets/img/dummy-img-d-timedeal-01-02-16-x-16.svg') no-repeat 0 50%;
  background-size: 24px auto;
  padding-left: 34px;
  color: #fff;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.5px;
`

const More = styled.button`
display:block;
background:none;
border:1px solid #333;
padding:0 48px;
height:48px;
border-radius:30px;
margin:0 auto;
margin-top:30px;
font-size:15px;
letter-spacing:-0.1em;
`;
export default Main
