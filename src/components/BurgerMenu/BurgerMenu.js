import styles from './BurgerMenu.module.css'

const BurgerMenu = (props) => {
    
    return (
        <div className={styles.menuBtn} onClick={props.onClick}>
            <div className={styles.menuBtnBurger}>

            </div>
        </div>
    )
}

export default BurgerMenu