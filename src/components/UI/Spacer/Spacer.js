import styles from "./Spacer.module.css";

const Spacer = (props) => {

  let color = 'black';
  let width = '90px';

  if(props.color) {
    color = props.color
  }

  if(props.width) {
    width = props.width
  }
  

  let style = {
    backgroundColor: color,
    width: width,
  };
  return <div className={styles.Spacer} style={style}></div>;
};

export default Spacer;
