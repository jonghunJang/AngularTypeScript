"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var color_directive_1 = require("./custom/color.directive");
var display_directive_1 = require("./custom/display.directive");
var ordinal_pipe_1 = require("./custom/ordinal.pipe");
var calculateLength_pipe_1 = require("./custom/calculateLength.pipe");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Ultra Racing';
        this.carParts = [{
                "id": 1,
                "name": "Super Tires",
                "description": "These tires are the very best.",
                "inStock": 5,
                "price": 4.99
            }, {
                "id": 2,
                "name": "Reinforced Shocks",
                "description": "Shocks made from kryptonite.",
                "inStock": 4,
                "price": 9.99
            }, {
                "id": 3,
                "name": "Padded Seats",
                "description": "Super soft seats for a smooth ride.",
                "inStock": 0,
                "price": 24.99
            }];
    }
    AppComponent = __decorate([
        core_1.Component({ selector: 'jhjang-App',
            template: "<h1>{{name | uppercase}}</h1> \n        <ul myColor=\"\">\n            <li *ngFor=\"let carPart of carParts; let i=index\">\n                <div [ngSwitch]=\"carPart.inStock\">\n                <h2 myColor>{{i+1 | ordinal}}. {{carPart.name}}</h2>\n                <p>{{carPart.description | calculateLength}}</p>\n                <p myHidden>Hidden Directive</p>\n                 <p>{{carPart.price | currency:'EUR':true}}</p>\n                <!--<p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>-->\n                <!--<p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>-->\n                <p *ngSwitchCase=\"0\">Out of Stock.</p>\n                <p *ngSwitchDefault=\"\">{{carPart.inStock| calculateLength}} in Storck.</p>\n                </div>\n            </li>\n        </ul>\n    " })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [AppComponent, color_directive_1.MyColorDirective, display_directive_1.MyDisplayDirective, ordinal_pipe_1.OrdinalPipe, calculateLength_pipe_1.CalculateLengthPipe],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map