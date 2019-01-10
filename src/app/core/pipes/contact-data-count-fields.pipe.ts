import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'contactData'
})

export class ContactDataCountFieldsPipe implements PipeTransform {

    transform(data: string): number {
        const results = JSON.parse(data)
        const keys = Object.keys(results)
        return keys.length
    }
}
