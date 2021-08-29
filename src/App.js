import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

const shoppingListArr = [
  // { name: 'молоко', id: 2 },
  // { name: 'хлеб', id: 3 },
  // { name: 'яйца', id: 4 },
  // { name: 'сосиски', id: 1 },
];

function App() {
  const [state, setState] = useState(shoppingListArr);

  const saveHandler = (newInfo) => {
    setState((prevState) => {
     return [newInfo, ...prevState]
    })
  };
  const deleteHandler = (id) => {
    setState(shoppingListArr.filter(item => {
      if (item.id !== id) {
        return item
      }
    })
    )};

  return (
    <div className="App">
      <ShoppingForm onSave={saveHandler} />
      {shoppingListArr.length === 0 ? <p>There is nothing to render</p> : (
        <ShoppingList data={state} onDelete={deleteHandler} />
      )}
    </div>
  );
}

export default App;
