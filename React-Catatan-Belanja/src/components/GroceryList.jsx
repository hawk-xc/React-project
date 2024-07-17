import { useState } from 'react';

export default function GroceryList({groceryItems, setGroceryItems}) {
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