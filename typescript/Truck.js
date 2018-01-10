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
Object.defineProperty(exports, "__esModule", { value: true });
var HappyCar_1 = require("./HappyCar");
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(carName, numTier) {
        return _super.call(this, carName, numTier) || this;
    }
    Truck.prototype.setSpeed = function (speed) {
        if (speed === void 0) { speed = 0; }
        _super.prototype.setSpeed.call(this, speed);
    };
    return Truck;
}(HappyCar_1.HappyCar));
exports.Truck = Truck;
var myTruck = new Truck("트럭", 16);
myTruck.setSpeed(65);
console.log(myTruck.getCarName() + "\uC758 \uD0C0\uC774\uC5B4 \uAC1C\uC218\uB294 " + myTruck.getNumTier() + "\uAC1C \uC785\uB2C8\uB2E4.\n            \uC18D\uB3C4\uB294 " + myTruck.getSpeed() + "km/h \uC785\uB2C8\uB2E4.");
