//on change event handler used primarily with form elements ex. <input>,<textarea>,<select>,<radio> triggers a function every time the value of the input changes

import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name : {name}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity : {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>comment:{comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">mastercard</option>
        <option value="giftcard">giftcard</option>
      </select>
      <p>payment:{payment}</p>
      <label htmlFor="Pick up">
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>{" "}
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Deliver
      </label>
      <p>Delivery : {shipping}</p>
    </div>
  );
}

export default MyComponent;
