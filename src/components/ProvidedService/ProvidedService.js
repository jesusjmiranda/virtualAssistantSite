import styles from './ProvidedService.module.css'

const ProvidedService = (props) => {
    return (
        <div className={styles.ProvidedService}>
            <div className={styles.icon}>{props.icon}</div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.details}>{props.details}</div>
        </div>
    )
}

export default ProvidedService