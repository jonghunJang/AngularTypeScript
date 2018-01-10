import {HappyCar} from "./HappyCar";

export class Truck extends HappyCar{

    constructor(carName: string, numTier: number) {
        super(carName, numTier);
    }
    setSpeed(speed:number =0):void{
        super.setSpeed(speed);
    }
}

const myTruck:Truck = new Truck("트럭",16 );
myTruck.setSpeed(65);
console.log(`${myTruck.getCarName()}의 타이어 개수는 ${myTruck.getNumTier()}개 입니다.
            속도는 ${myTruck.getSpeed()}km/h 입니다.`);
