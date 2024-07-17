import { useState } from "react";

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
        id: prevItem.length + 1,
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

function Header() {
  return (
    <h1>Catatan Belanjaku 📝</h1>
  );
}

function Form({addItem}) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const counts = Array.from({ length: 10 }, (_, index) => index + 1);

  const handleAddData = (e) => {
    e.preventDefault();
    if(name === '') return;
    addItem(name, quantity);
    setName('');
    setQuantity(0); 
  }

  return( 
    <>
      <form className="add-form" onSubmit={handleAddData}> 
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {counts.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <button type="submit">Tambah</button>
      </form>
    </>
  );
}

function GroceryList({groceryItems, setGroceryItems}) {
  const handleChecked = (id) => {
    setGroceryItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleRemove = (id) => {
    const confirmation = confirm('apakah anda yakin ingin menghapus?');
    if(confirmation) setGroceryItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  return(
    <>
      <div className="list">
        <ul>
          {groceryItems.map((i) => (
            <li key={i.id} >
              <input type="checkbox" checked={i.checked} onChange={() => handleChecked(i.id)} />
              <span className={i.checked ? 'checked' : ''}>{i.quantity} {i.name}</span>
              <button onClick={() => handleRemove(i.id) }>&times;</button>
            </li>
          ))}          
        </ul>
      </div>
    </>
  );
}

function Action({groceryItems, setGroceryItems}) {
  function clearList() {
    const confirmation = confirm('apakah anda yakin ingin menghapus semua?');
    if(confirmation) setGroceryItems([]);
  }

  return (
    <>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={clearList} disabled={groceryItems.length === 0}>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function Footer({groceryItems}) {
  return(
    <footer className="stats">Ada {groceryItems.length} barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
  );
}