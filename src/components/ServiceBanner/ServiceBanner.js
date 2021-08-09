import styles from "./ServiceBanner.module.css";

const ServiceBanner = (props) => {
  /* 
  let style = {
    flexDirection: "row",
  }; 
 
  */
  let style = styles.ServiceBanner
  if(props.flip) {
    style = styles.FlippedBanner
  }

  return (
    <div className={style}>
      {props.children}
    </div>
  );
};

export default ServiceBanner;