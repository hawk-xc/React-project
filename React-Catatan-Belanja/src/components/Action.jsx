import { useState } from 'react';

export default function Action({groceryItems, setGroceryItems}) {

    function clearList() {
      const confirmation = confirm('apakah anda yakin ingin menghapus semua?');
      if(confirmation) setGroceryItems([]);
    }
  
    function shortByInput(type) {
      let sortedItems;
  
      switch(type) {
        case 'name':
          sortedItems = [...groceryItems].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'checked':
          sortedItems = [...groceryItems].sort((a, b) => a.checked - b.checked);
          break;
      }
  
      setGroceryItems(sortedItems);
    }
  
  
    return (
      <>
        <div className="actions">
          <select onChange={(e) => shortByInput(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={clearList} disabled={groceryItems.length === 0}>Bersihkan Daftar</button>
        </div>
      </>
    );
  }