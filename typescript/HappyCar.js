"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HappyCar = /** @class */ (function () {
    //생성자 (new Car("해피카",4))
    function HappyCar(carName, numTier) {
        this._carName = carName;
        this._numTier = numTier;
    }
    HappyCar.prototype.getNumTier = function () {
        return this._numTier;
    };
    HappyCar.prototype.getCarName = function () {
        return this._carName;
    };
    HappyCar.prototype.getSpeed = function () {
        return this._speed;
    };
    HappyCar.prototype.setSpeed = function (speed) {
        this._speed = speed;
    };
    return HappyCar;
}());
exports.HappyCar = HappyCar;
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(carName, numTier) {
        return _super.call(this, carName, numTier) || this;
    }
    Bus.prototype.setSpeed = function (speed) {
        if (speed === void 0) { speed = 0; }
        _super.prototype.setSpeed.call(this, speed);
    };
    return Bus;
}(HappyCar));
// let myCar = new Car("해피카",4);
//객체 생성 시에는 상수로 생성하는 것이 안전(let 변수, const 상수)
var happymyCar = new HappyCar("내자동차ㅎ", 4);
console.log(happymyCar.getCarName() + "\uC758 \uD0C0\uC774\uC5B4 \uAC1C\uC218\uB294 " + happymyCar.getNumTier() + "\uAC1C \uC785\uB2C8\uB2E4.");
var myBus = new Bus("시외버스", 8);
myBus.setSpeed(80);
console.log(myBus.getCarName() + "\uC758 \uD0C0\uC774\uC5B4 \uAC1C\uC218\uB294 " + myBus.getNumTier() + "\uAC1C \uC785\uB2C8\uB2E4.\n            \uC18D\uB3C4\uB294 " + myBus.getSpeed() + "km/h \uC785\uB2C8\uB2E4.");
