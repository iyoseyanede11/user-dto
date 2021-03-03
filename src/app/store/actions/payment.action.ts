import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserPaymentActionTypes {
    MAKE_PAYMENT = '[USER] Make Payment'
}

export class MakePaymentAction implements Action {
    readonly type = UserPaymentActionTypes.MAKE_PAYMENT

    constructor(public payload: User) {}   
}

export type PaymentAction = MakePaymentAction