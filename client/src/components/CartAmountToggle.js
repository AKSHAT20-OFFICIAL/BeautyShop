import React from "react";
import styled from "styled-components";

import { FaMinus, FaPlus } from "react-icons/fa";
const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
