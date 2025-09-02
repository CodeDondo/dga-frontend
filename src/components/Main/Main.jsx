import MainLogo from '../../assets/MissionStatement.png'
import { ItemList } from '../ItemList/ItemList'
import { MissionStatement, MainContainer } from './MainStyles'
import Seperator from '../../assets/Seperator.png'

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
      </MainContainer>
    </>
  )
}
