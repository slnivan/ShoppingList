import classes from "./ShoppingItem.module.css";


const ShoppingItem = (props) => {
  return (
    <li className={classes.item}>
      {props.children}
    </li>
  );
};

export default ShoppingItem;
