import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise=loadStripe('pk_test_51Jvl5FCASbmiNBkhgsFSsDl0ejyoB9qlBjXUi30vbeTAxWEFa0Pizt8YmR1kzVM9Ctbjt6o0lz1mhjipmuqkd1MA00CMbig9WB')

const Payment = () => {
    const {appointmentId}=useParams();
    const [appointment,setAppointment]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res=>res.json())
        .then(data=>setAppointment(data))
    },[appointmentId])
    return (
        <div>
            <h1>Please Pay for: {appointment.patientName} for {appointment.serviceName} </h1>
            <h3>Pay ${appointment.price}</h3>
            {appointment?.price && <Elements stripe={stripePromise}>
        <CheckoutForm 
            appointment={appointment}
        />
    </Elements>}
        </div>
    );
};

export default Payment;

/* 
1. install stripe and stripe-react
2. Set publishable key
3. Elements
4. Checkout Forms
--------------
6. Create Payment method
*/