export default function Footer({groceryItems}) {
    return(
      <footer className="stats">Ada {groceryItems.length} barang di daftar belanjaan, {groceryItems.filter(item => item.checked === true).length} barang sudah dibeli ({groceryItems.length > 1 ? groceryItems.filter(item => item.checked === true).length / groceryItems.length * 100 : 0}%)</footer>
    );
  }