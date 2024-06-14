export interface Transaction{
    userId: string, 
    transactionId: string,
    contact: number,
    amount: number,
    dot: string
}

export interface User{
    email: string,
    password: string
}