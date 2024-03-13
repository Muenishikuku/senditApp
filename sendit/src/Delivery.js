import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function DeliveryForm({ setUser }) {
  const [town, setTown] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();

  const handleDelivery = (e) => {
    e.preventDefault();
    // Handle delivery submission logic
    console.log(`Selected town: ${town}, Address: ${address}, Payment Method: ${paymentMethod}`);
    if (paymentMethod === 'mpesa') {
      console.log(`M-Pesa Number: ${mpesaNumber}`);
    }
    // Redirect or perform further actions
    navigate('/confirmation'); // Example: Redirect to confirmation page
     // Generate a random tracking number (for demonstration purposes)
     const newTrackingNumber = Math.random().toString(36).substr(2, 9);
     setTrackingNumber(newTrackingNumber);
     // Redirect or perform further actions
     navigate('/confirmation'); // Example: Redirect to confirmation page
  };

  return (
    <div className="delivery-form">
      <h2>Delivery Details</h2>
      <form onSubmit={handleDelivery}>
        <div>
          <label htmlFor="town">Town:</label>
          <select id="town" value={town} onChange={(e) => setTown(e.target.value)} required>
            <option value="Bungoma">Bungoma</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Embu">Embu</option>
            <option value="Kisii">Kisii</option>
            <option value="Meru">Meru</option>
            <option value="Kakamega">Kakamega</option>
            <option value="Naivasha">Naivasha</option>
            <option value="Eldoret">Eldoret</option>
            <option value="Busia">Busia</option>
            <option value="Malaba">Malaba</option>
            <option value="Malindi">Malindi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            {/* Add more options for other Kenyan towns */}
          </select>
        </div>
        <div>
          <label htmlFor="address">Delivery Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <div>
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>
          <div>
            <input
              type="radio"
              id="mpesa"
              name="paymentMethod"
              value="mpesa"
              checked={paymentMethod === 'mpesa'}
              onChange={() => setPaymentMethod('mpesa')}
            />
            <label htmlFor="mpesa">M-Pesa</label>
          </div>
          {paymentMethod === 'mpesa' && (
            <div>
              <label htmlFor="mpesaNumber">M-Pesa Number:</label>
              <input
                type="text"
                id="mpesaNumber"
                value={mpesaNumber}
                onChange={(e) => setMpesaNumber(e.target.value)}
                required
              />
            </div>
          )}
        </div>
        <button type="submit" className="btn">Proceed to Delivery</button>
      </form>
      <div>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
      {trackingNumber && (
        <div className="tracking-info">
          <p>Your tracking number: {trackingNumber}</p>
          <p>You can track your delivery <Link to={`/track/${trackingNumber}`}>here</Link>.</p>
        </div>
      )}
    </div>
  );
}


export default DeliveryForm;