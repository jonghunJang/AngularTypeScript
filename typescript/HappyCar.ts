export class HappyCar{
    
    //필드, 인스턴스변수, 인스턴스멤버
    private _numTier : number;
    private _carName : string;
    private _speed : number;

    //생성자 (new Car("해피카",4))
    constructor(
        carName:string, numTier:number
    ){
        this._carName = carName;
        this._numTier = numTier;
    }
    getNumTier(): number {
        return this._numTier;
    }

    getCarName(): string {
        return this._carName;
    }

    getSpeed(): number {
        return this._speed;
    }

    setSpeed(speed: number) {
        this._speed = speed;
    }
}

class Bus extends HappyCar{

    constructor(carName: string, numTier: number) {
        super(carName, numTier);
    }
    setSpeed(speed:number =0):void{
        super.setSpeed(speed);
    }
}

// let myCar = new Car("해피카",4);
//객체 생성 시에는 상수로 생성하는 것이 안전(let 변수, const 상수)
const happymyCar = new HappyCar("내자동차ㅎ",4);
console.log(`${happymyCar.getCarName()}의 타이어 개수는 ${happymyCar.getNumTier()}개 입니다.`);

const myBus:Bus = new Bus("시외버스",8 );
myBus.setSpeed(80);
console.log(`${myBus.getCarName()}의 타이어 개수는 ${myBus.getNumTier()}개 입니다.
            속도는 ${myBus.getSpeed()}km/h 입니다.`);
