import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Station } from '../model/station'


export default class StationFormUtils {

    public static createForm(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: [null, []],
            name: [null, [Validators.required]],
            location: [null, [Validators.required]],
            avaliability: [null, [Validators.required]],
            details: [null, [Validators.email, Validators.required]]
            
        })
    }

    public static updateForm(station: Station, formGroup: FormGroup) {
        if (formGroup && station) {
            formGroup.patchValue({
                id: station.id,
                name: station.name,
                location: station.location,
                avaliability: station.avaliability,
                details: station.details
            })
        }
    }
}
