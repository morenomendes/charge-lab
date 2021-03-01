import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../model/user';

export default class UserFormUtils {

    public static createForm(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: [null, []],
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            phoneNumber: [null, [Validators.required]],
            email: [null, [Validators.email, Validators.required]],
            stations: [null, []]
            
        })
    }

    public static updateForm(user: User | undefined, formGroup: FormGroup) {
        if (formGroup && user) {
            formGroup.patchValue({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                email: user.email,
                stations: user.stations
            })
        }
    }
}


export class UserModel implements User {
    id!: number
    firstName!: string;
    lastName!: string
    phoneNumber!: string
    email!: string
    stations!: number[]
}

export class UserModelBuilder {
    private toBuild: UserModel

    public static getInstance(toBuild: UserModel| undefined): UserModelBuilder {
        return new UserModelBuilder(toBuild)
    }

    constructor(toBuild: UserModel | undefined) {
        if (toBuild) {
            this.toBuild = toBuild
        } else {
            this.toBuild = new UserModel()
        }
    }

    public id(id: number): UserModelBuilder {
        this.toBuild.id = id
        return this
    }
    public firstName(firstName: string): UserModelBuilder {
        this.toBuild.firstName = firstName
        return this
    }
    public lastName(lastName: string): UserModelBuilder {
        this.toBuild.lastName = lastName
        return this
    }
    public phoneNumber(phoneNumber: string): UserModelBuilder {
        this.toBuild.phoneNumber = phoneNumber
        return this
    }
    public email(email: string): UserModelBuilder {
        this.toBuild.email = email
        return this
    }
    public stations(stations: number[]): UserModelBuilder {
        this.toBuild.stations = stations
        return this
    }
    public build(): UserModel {
        return this.toBuild
    }
}
