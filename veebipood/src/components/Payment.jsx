
function Payment() {

  async function pay() {
    const paymentBody = {
      "account_name": "EUR3D1",
      "nonce": "165f" + new Date() + Math.random(),
      "timestamp": new Date(),
      "amount": 0.05,
      "order_reference": Math.random(),
      "customer_url": "http://app.localhost:5173",
      "api_username": "e36eb40f5ec87fa2"
    }
    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }

    const res = await fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff", {
      method: "POST", 
      body: JSON.stringify(paymentBody), 
      headers: paymentHeaders
    });
    const json = await res.json();
    window.location.href = json.payment_link;
  }

  return (
    <button onClick={pay}>Maksa</button>
  )
}
export default Payment