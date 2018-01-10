"use strict";
exports.__esModule = true;
var Truck_1 = require("./Truck");
var myTruck = new Truck_1.Truck("내트럭", 4);
myTruck.setSpeed(100);
console.log("\uB0B4 \uBA54\uC778 \uD2B8\uB7ED\uC758 " + myTruck.getCarName() + "\uC758 \uD0C0\uC774\uC5B4 \uAC1C\uC218\uB294 " + myTruck.getNumTier() + "\uAC1C \uC785\uB2C8\uB2E4.\n            \uC18D\uB3C4\uB294 " + myTruck.getSpeed() + "km/h \uC785\uB2C8\uB2E4.");
