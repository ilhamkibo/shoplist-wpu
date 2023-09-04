import { useState } from "react";

export default function Form({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!name) return;
      let id = new Date();
      id =
        id.getFullYear() + id.getMilliseconds() + id.getDay() + id.getMinutes();
  
      const newItem = { name, quantity, checked: false, id };
      onAddItem(newItem);
  
      setName("");
      setQuantity(1);
    }
  
    const quantityNum = [...Array(20)].map((_, index) => (
      <option key={index} value={index + 1}>
        {index + 1}
      </option>
    ));
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {quantityNum}
          </select>
          <input
            type="text"
            placeholder="nama barang..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button>Tambah</button>
        </div>
      </form>
    );
  }