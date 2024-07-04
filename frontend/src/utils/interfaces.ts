export type Transaction = {
    userId: string, 
    receiptNumber: string;
    phoneNumber: number;
    merchantRequestId: string;
    checkoutRequestId: string;
    amount: number,
    resultCode: number,
    transactionDate: number
    resultDescription: string
    type: string,
    receiver: string
}

export interface User{
    email: string,
    password: string
}