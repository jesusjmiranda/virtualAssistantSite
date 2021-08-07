import styles from './ServiceBanner.module.css'

const ServiceBanner = (props) => {
    return (
        <div className={styles.ServiceBanner}>
            <img src={props.image} alt={props.altText}/>
            <div className={styles.ServiceContent}>
                <div className={styles.ServiceTitle}>
                    Title
                </div>
                <div className={styles.ServiceTitle}>
                    Content for the entire ServiceBanner component
                </div>
            </div>
        </div>
    )
}

export default ServiceBanner