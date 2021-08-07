import styles from "./ServiceBanner.module.css";

const ServiceBanner = (props) => {
  let style = {
    flexDirection: "row",
  }; 
  if(props.flip) {
      style.flexDirection = "row-reverse"
  }
  return (
    <div className={styles.ServiceBanner} style={style}>
      <div><img src={props.image} alt={props.altText} /></div>
      <div className={styles.ServiceContent}>
        <div className={styles.ServiceTitle}>{props.title}</div>
        <div className={styles.ServiceTitle}>{props.content}</div>
      </div>
    </div>
  );
};

export default ServiceBanner;