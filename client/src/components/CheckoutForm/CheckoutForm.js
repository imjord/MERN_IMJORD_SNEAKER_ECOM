import { PaymentElement } from "@stripe/react-stripe-js";



const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement />
            <button>Pay</button>
        </form>
    )
}

export default CheckoutForm;