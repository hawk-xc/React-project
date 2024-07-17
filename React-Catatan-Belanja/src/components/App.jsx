import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Action from "./Action";
import Footer from "./Footer";

const initalGroceryItems = [
  {
    id: 1,
    name: 'Kopi',
    quantity: 2,
    checked: false
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 2,
    checked: false
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 1,
    checked: false
  },
  {
    id: 4,
    name: 'Telur',
    quantity: 1,
    checked: false}
];

export default function App() {
  const [groceryItems, setGroceryItems] = useState(initalGroceryItems);

  const addItem = (name, quantity) => {
    setGroceryItems((prevItem) => [
      ...prevItem, {
        id: groceryItems[groceryItems.length - 1].id + 1,
        name: name,
        quantity: quantity === 0 ? quantity + 1 : quantity,
        checked: false
      }
    ]);
  }

  return(
    <div className="app">
      <Header />
      <Form addItem={addItem} />
      <GroceryList groceryItems={groceryItems} setGroceryItems={setGroceryItems} />
      <Action groceryItems={groceryItems} setGroceryItems={setGroceryItems} />
      <Footer groceryItems={groceryItems} />
    </div>
  );
};