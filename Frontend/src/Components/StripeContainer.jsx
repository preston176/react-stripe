import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51NUHNtEFBkCVrySQmEOwMeISenUaRwqZrIsZxeldYPXExHv6tf6Ai2QQ3GwJD42Aj9E4GETXRC3THsdFC1UeeWXV00gxtdBqY0"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
