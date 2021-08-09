import styles from "./Spacer.module.css";

const Spacer = (props) => {

  let color = 'black';
  let width = '90px';
  let marginTop = '20px';

  if(props.color) {
    color = props.color
  }

  if(props.width) {
    width = props.width
  }

  if(props.marginTop) {
    marginTop = props.marginTop
  }
  

  let style = {
    backgroundColor: color,
    width: width,
    marginTop: marginTop,
  };

  return <div className={styles.Spacer} style={style}></div>;
};

export default Spacer;
