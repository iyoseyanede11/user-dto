import { UserPaymentActionTypes, PaymentAction } from "../actions/payment.action"
import { User } from "../models/user.model"

const initialState: User = {
    firstName: '',
    lastName: '',
    email: '',
    advertBudget: 0,
    phoneNumber: 0,
}

export function PaymentReducer(state: User = initialState, action: PaymentAction ){
    switch (action.type){
        case UserPaymentActionTypes.MAKE_PAYMENT:
            return action.payload;
        default:
            return state;
    }
}