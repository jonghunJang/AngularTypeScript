var Car = /** @class */ (function () {
    //생성자 (new Car("해피카",4))
    function Car(carName, numTier) {
        this._carName = carName;
        this._numTier = numTier;
    }
    Car.prototype.getNumTier = function () {
        return this._numTier;
    };
    Car.prototype.getCarName = function () {
        return this._carName;
    };
    return Car;
}());
// let myCar = new Car("해피카",4);
//객체 생성 시에는 상수로 생성하는 것이 안전(let 변수, const 상수)
var myCar = new Car("내자동차ㅎ", 4);
console.log(myCar.getCarName() + "\uC758 \uD0C0\uC774\uC5B4 \uAC1C\uC218\uB294 " + myCar.getNumTier() + "\uAC1C \uC785\uB2C8\uB2E4.");
