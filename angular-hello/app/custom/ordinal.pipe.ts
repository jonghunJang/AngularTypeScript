import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform{
    transform(value:number):string{
        /*
            1 => 1st
            2 => 2nd
            3 => 3rd
            4 => 4th
            11 => 11th
         */
        let suffix:string="";
        const lastNumber = value % 10;
        const specialLast = value % 100;

        console.log(`lastNumber => ${lastNumber}
       specialList => ${specialLast}`);

        if(lastNumber === 1 && specialLast !== 11){
            suffix = 'st';
        }else if(lastNumber === 2 && specialLast !== 12){
            suffix = 'nd';
        }else if(lastNumber === 3 && specialLast !== 13){
            suffix = 'rd';
        }else{
            suffix = 'th';
        }

        return value + suffix;
    }
}