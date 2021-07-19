import blue from './images/blueOffice.png'
import grey from './images/greyOfficeSpace.png'
import monarch from './images/monarchSunrise.png'
import cute from './images/organizedCute.png'
import peach from './images/peachGlobeAndRoom.png'
import salmon from './images/salmonOfficeWorker.png'
import white from './images/whiteWall.png'

import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.App}>
            Nivia's Site
            <img src={blue} alt={'cartoon of office lady working with blue background'}/>
            <img src={grey} alt={'cartoon of office lady working with blue background'}/>
            <img src={monarch} alt={'cartoon of office lady working with blue background'}/>
            <img src={cute} alt={'cartoon of office lady working with blue background'}/>
            <img src={peach} alt={'cartoon of office lady working with blue background'}/>
            <img src={salmon} alt={'cartoon of office lady working with blue background'}/>
            <img src={white} alt={'cartoon of office lady working with blue background'}/>

        </div>
    )
}

export default App;
