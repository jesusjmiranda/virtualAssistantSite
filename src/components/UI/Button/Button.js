import styles from "./Button.module.css";

const Button = (props) => {
  return (
      <div className={styles.Button}>
        {props.text}
      </div>
  )
};

export default Button;
