import styles from './IconComponent.module.css'
const IconComponent = (props) => {
    return (
        <div className={styles.IconComponent}>
            <img className={styles.MainLogo} src={props.imageSource} alt={'main logo'} />
        </div>
    )
}

export default IconComponent