import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'calculateLength'
})
export class CalculateLengthPipe implements PipeTransform{
    transform(value:string):string{
        value = value+"";
        let strLength:number = value.length;
        console.log(`value => ${value}
       strLength => ${strLength} `);
        let suffix:string=" 글자수("+strLength+")";
        return value + suffix;
    }
}