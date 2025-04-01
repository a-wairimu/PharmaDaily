import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesapayment = () => {
    const {product} = useLocation().state || {};

    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const submit = async (e) => {
        e.preventDefault()
    
        setMessage("Please wait as we process your payment....")

        const data= new FormData();

        data.append("phone", phone)

        data.append("amount",product.product_cost)

        const response = await axios.post("https://AngelaWairimu5429.pythonanywhere.com/api/mpesa_payment", data)

        setMessage(response.data.message)

    }
    // console.log(product.product_name)
    // console.log(product.product_description)
    // console.log(product.product_cost)
    // console.log(product.product_photo)



  return (
    <div className='row justify-content-center'>
        <h1 className='text-info'>Mpesa payment</h1>
        <div className='col-md-6 card shadow p-3'>
        <b className='text-success'>{message}</b>
        <h4 className='text-success'>{product.product_name}</h4>
        <form onSubmit={submit}>
        <label></label>
        <h4>Product cost:{product.product_cost}</h4>
        <input
        type='number'
        placeholder='Enter your M-PESA number'
        value={phone}
        onChange={(e) =>setPhone(e.target.value)}
        className='form-control'/>
        <br />
        <br />
        
        <button className='btn btn-success'>Make Payment</button>
       </form>
        </div>
       

    </div>
  )
}

export default Mpesapayment