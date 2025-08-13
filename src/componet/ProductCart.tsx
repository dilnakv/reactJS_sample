import React, { useReducer, useState } from "react";

// Type for a cart item
interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

// Actions
type Action =
  | { type: "ADD_ITEM"; payload: { name: string; quantity: number } }
  | { type: "UPDATE_ITEM"; payload: { id: number; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { id: number } };

// Reducer function
const cartReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload.name,
          quantity: action.payload.quantity,
        },
      ];
    case "UPDATE_ITEM":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const ProductCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleAdd = () => {
    if (!name.trim() || quantity <= 0) return;
    dispatch({ type: "ADD_ITEM", payload: { name, quantity } });
    setName("");
    setQuantity(1);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Shopping Cart</h2>

      {/* Product Name */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ width: "120px" }}>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ flex: 1 }}
        />
      </div>

      {/* Quantity */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ width: "120px" }}>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ flex: 1 }}
        />
      </div>

      <button onClick={handleAdd} style={{ marginBottom: "15px" }}>
        Add to Cart
      </button>

      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ margin: "10px 0" }}>
            {item.name} - Quantity:{" "}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_ITEM",
                  payload: { id: item.id, quantity: Number(e.target.value) },
                })
              }
              style={{ width: "50px" }}
            />
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
              }
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

