export default function SelectPayment() {
  return (
    <div className="mb-4">
      <label className="flex items-center text-white mb-2">
        <input
          type="radio"
          name="payment_method"
          value="card"
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="ml-2">Credit or Debit Card</span>
      </label>
      <label className="flex items-center text-white">
        <input
          type="radio"
          name="payment_method"
          value="paypal"
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="ml-2">PayPal</span>
      </label>
    </div>
  );
}
