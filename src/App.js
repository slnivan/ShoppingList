import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [shoppList, setShopList] = useState([]);

  const saveHandler = (newInfo) => {
    setShopList((prevShopList) => {
      return [{ ...newInfo }, ...prevShopList];
    });
    console.log(shoppList);
  };
  const deleteHandler = (id) => {
    setShopList(shoppList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <ShoppingForm onSave={saveHandler} />
      {shoppList.length === 0 ? (
        <p>There is nothing to render</p>
      ) : (
        <ShoppingList data={shoppList} onDelete={deleteHandler} />
      )}
    </div>
  );
}

export default App;
