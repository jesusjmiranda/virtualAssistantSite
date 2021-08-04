import styles from './ContentBanner.module.css'
const ContentBanner = (props) => {
    console.log(Object.keys(props))
    return (
        <div className={styles.ContentBanner} style={{backgroundColor: props.color}}>
            {props.children}
        </div>
    )
}

export default ContentBanner