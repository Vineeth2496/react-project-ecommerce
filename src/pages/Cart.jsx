import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
 <div style={{
  padding: '20px',
  backgroundColor: theme === "dark" ? "#121212" : "#fff",
  color: theme === "dark" ? "#fff" : "#000",
  minHeight: "100vh"
}}>

      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
       <div key={item.id} style={{
  ...styles.item,
  backgroundColor: theme === "dark" ? "#222" : "#f9f9f9",
  padding: "10px",
  borderRadius: "8px"
}}>

              <img src={item.image} alt={item.title} style={styles.img} />
              <div>
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
                <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹ {getTotal().toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    alignItems: "center"
  },
  img: {
    width: "80px",
    height: "80px",
    objectFit: "contain"
  },
  removeBtn: {
    marginLeft: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default Cart;
