export interface User {
    id: number
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    stations: number[]
}


export interface UserStation {
    id: number
    user: number
    station: number
}

