import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'stock'
})
export class StockPipe implements PipeTransform{
    transform(value:number):string {
        return value === 0 ? 'Out of Stock.' : `${value} in Stock.`;
    }
}