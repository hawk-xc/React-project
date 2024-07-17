import { useState } from 'react';

export default function Form({addItem}) {
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