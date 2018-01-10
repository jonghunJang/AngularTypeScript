class Car{
    
    //필드, 인스턴스변수, 인스턴스멤버
    private _numTier : number;
    private _carName : string;

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
}

// let myCar = new Car("해피카",4);
//객체 생성 시에는 상수로 생성하는 것이 안전(let 변수, const 상수)
const myCar = new Car("내자동차ㅎ",4);
console.log(`${myCar.getCarName()}의 타이어 개수는 ${myCar.getNumTier()}개 입니다.`);