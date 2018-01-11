import {Component} from "@angular/core";
import {CarPart} from "../../models/car-part";
import {CAR_PARTS} from "../../data/mocks";
import {RacingDataService} from "../../services/racing-data.service";

@Component({
    selector : 'car-parts',
    templateUrl : 'app/components/car-parts/car-parts.component.html',
    styleUrls : ['app/components/car-parts/car-parts.component.css']
})
export class CarPartsComponent{

    //RacingDataService 를 CarPartsComponent의 멤버로 사용하고 싶을 때는 아래와 같이 생성자를 통해 생성 후 접근
    constructor(private racingDataService:RacingDataService){

    }


    totalCarParts():number{
        //ES5
        /*
        let sum = 0;

        this.carParts.forEach(function(carPart){
            sum += carPart.inStock;
        })
        return sum;
        */

        //ES6 (for - of)
        /*
        let sum:number=0;
        for (let carPart of this.carParts){
            sum += carPart.inStock;
        }
        return sum;
        */

        //ES6 (reduce)
        //amount 는 집계된 결과, value 반복요소
        /*
        let sum:number = this.carParts.reduce(function(amount, value){ return amount + value.inStock}, 0);
        return sum;
        */
        //ES6 (reduce + arrow function)
        // let sum:number =this.carParts.reduce((amount, value) => amount + value.inStock, 0);

        let sum:number = 0;
        if(Array.isArray(this.carParts)){
            sum =this.carParts.reduce((amount, value) => amount + value.inStock, 0)
        }
        return sum;
    }

    // carParts : CarPart[] = CAR_PARTS;
    carParts:CarPart[];
    ngOnInit(){
        console.log("Initiated Component");
        // this.carParts = CAR_PARTS;
        // this.carParts = this.racingDataService.getCarParts();
        this.racingDataService.getCarParts().subscribe(carParts => this.carParts=carParts);

    }

    upQuantity(carPart:CarPart){
        if(carPart.quantity < carPart.inStock){
            carPart.quantity++;
        }
    }
    downQuantity(carPart:CarPart){
        if(carPart.quantity !=0){
            carPart.quantity--;
        }
    }
}