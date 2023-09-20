import "../styles/CheckOut.css";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const navigate = useNavigate();
  return (
    <>
      <div class="modal">
        <form class="form">
          <div class="credit-card-info--form">
            <div class="input_container">
              <label for="password_field" class="input_label">
                Card holder full name
              </label>
              <input
                id="password_field"
                class="input_field"
                type="text"
                name="input-name"
                title="Inpit title"
                placeholder="Enter your full name"
              />
            </div>
            <div class="input_container">
              <label for="password_field" class="input_label">
                Card Number
              </label>
              <input
                id="password_field"
                class="input_field"
                type="number"
                name="input-name"
                title="Inpit title"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div class="input_container">
              <label for="password_field" class="input_label">
                Expiry Date / CVV
              </label>
              <div class="split">
                <input
                  id="password_field"
                  class="input_field"
                  type="text"
                  name="input-name"
                  title="Expiry Date"
                  placeholder="01/23"
                />
                <input
                  id="password_field"
                  class="input_field"
                  type="number"
                  name="cvv"
                  title="CVV"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
          <button className="checkout-btn" onClick={() => navigate("/vite-web/")}>
            Checkout
          </button>
        </form>
      </div>
    </>
  );
}

export default CheckOut;
