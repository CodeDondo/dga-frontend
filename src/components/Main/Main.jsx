import MainLogo from '../../assets/MissionStatement.png'
import { ItemList } from '../ItemList/ItemList'
import { CategoryList } from '../CategoryList/CategoryList'
import { MissionStatement, MainContainer, ImageWrapper } from './MainStyles'
import Seperator from '../../assets/Seperator.png'
import AllTimeDono from '../../assets/AllTime-Banner.png'
import Y2D from '../../assets/Y2D-Banner.png'

export const Main = () => {
  return (
    <>
      <MainContainer>
        <img src={Seperator} alt="seperator" />
        <ItemList />
        <img src={Seperator} alt="serepator" />
        <MissionStatement>
          <img src={MainLogo} alt="Main" />
        </MissionStatement>
        <img src={Seperator} alt="seperator" />
          <CategoryList />
          <img src={Seperator} alt="seperator" />
          <ImageWrapper>
            <img src={AllTimeDono} alt="AllTime" />
            <img src={Y2D} alt="Y2D" />
          </ImageWrapper>
      </MainContainer>
    </>
  )
}
