import "./ContentBanner.css";
const ContentBanner = (props) => {
  let color = props.color
  let marginTop = props.marginTop
  let marginBottom = props.marginBottom
  let paddingTop = props.paddingTop

  if (!color) {
    color = 'darkgray'
  }
  if (!props.marginTop) {
    marginTop = '0px'
  }

  if (!props.marginBottom) {
    marginBottom = '0px'
  }

  if (!props.paddingTop) {
    paddingTop = '0px'
  }

  return (
    <div className={"ContentBanner"} style={{ backgroundColor: color, marginTop: marginTop, marginBottom: marginBottom, paddingTop: paddingTop}}>
      {props.children}
    </div>
  );
};

export default ContentBanner;
