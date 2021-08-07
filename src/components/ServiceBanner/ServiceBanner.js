import styles from './ServiceBanner.module.css'

const ServiceBanner = (props) => {
    return (
        <div className={styles.ServiceBanner}>
            <div className={styles.ServiceImage}>ServiceImageHere</div>
            <div className={styles.ServiceContent}>This will be the content</div>
        </div>
    )
}

export default ServiceBanner