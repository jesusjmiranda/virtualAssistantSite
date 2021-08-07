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
      {props.children}
    </div>
  );
};

export default ServiceBanner;