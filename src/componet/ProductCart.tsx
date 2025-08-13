import { useReducer, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

type CartAction =
  | { type: "ADD"; name: string; quantity: number }
  | { type: "UPDATE"; id: number; name: string; quantity: number }
  | { type: "REMOVE"; id: number };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), name: action.name, quantity: action.quantity },
      ];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, name: action.name, quantity: action.quantity }
          : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export default function ProductCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  
  const handleAdd = () => {
    if (name.trim()) {
      dispatch({ type: "ADD", name, quantity });
      setName("");
      setQuantity(1);
    }
  };

  const handleUpdate = (id: number, name: string, quantity: number) => {
    dispatch({ type: "UPDATE", id, name, quantity });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Shopping Cart</h2>

      <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
        <div style={{ flex: 1 }}>
          <label>Product Name</label>
          <input
            style={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product"
          />
        </div>
        <div style={{ width: "100px" }}>
          <label>Quantity</label>
          <input
            type="number"
            style={{ width: "100%" }}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
      </div>

      <button onClick={handleAdd}>Add Item</button>

      <ul style={{ marginTop: "20px", padding: 0, listStyle: "none" }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <input
              value={item.name}
              onChange={(e) =>
                handleUpdate(item.id, e.target.value, item.quantity)
              }
            />
            <input
              type="number"
              style={{ width: "60px" }}
              value={item.quantity}
              onChange={(e) =>
                handleUpdate(item.id, item.name, Number(e.target.value))
              }
            />
            <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
