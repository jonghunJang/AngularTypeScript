import {Truck} from "./Truck";
import {HappyCar} from "./HappyCar";

const myTruck:HappyCar = new Truck("내트럭",4);
myTruck.setSpeed(100);
console.log(`내 메인 트럭의 ${myTruck.getCarName()}의 타이어 개수는 ${myTruck.getNumTier()}개 입니다.
            속도는 ${myTruck.getSpeed()}km/h 입니다.`);