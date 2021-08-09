import  './BurgerMenu.css'

const BurgerMenu = (props) => {
    
    return (
        <div className={'menuBtn'} onClick={props.onClick}>
            <div className={'menuBtnBurger'}>
                
            </div>
        </div>
    )
}

export default BurgerMenu