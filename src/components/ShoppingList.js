import ShoppingItem from "./ShoppingItem";
import classes from "./ShoppingList.module.css";
import Button from "./UI/Button";

const ShoppingList = (props) => {
  return (
    <ul className={classes.list}>
      {props.data.map((item) => {
        return (
          <ShoppingItem key={item.id}>
            {item.name}
            <Button onClick={() => props.onDelete(item.id)}>X</Button>
          </ShoppingItem>
        );
      })}
    </ul>
  );
};

export default ShoppingList;
