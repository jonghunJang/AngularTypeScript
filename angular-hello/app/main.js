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
var stock_pipe_1 = require("./custom/stock.pipe");
var app_component_1 = require("./components/myapp/app.component");
var car_parts_component_1 = require("./components/car-parts/car-parts.component");
var forms_1 = require("@angular/forms");
var racing_data_service_1 = require("./services/racing-data.service");
// import {HttpClientModule} from "@angular/common/http";
var http_1 = require("@angular/http");
var about_component_1 = require("./components/about/about.component");
var app_routes_1 = require("./routes/app.routes");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, color_directive_1.MyColorDirective, display_directive_1.MyDisplayDirective, ordinal_pipe_1.OrdinalPipe, calculateLength_pipe_1.CalculateLengthPipe, stock_pipe_1.StockPipe, car_parts_component_1.CarPartsComponent,
                about_component_1.AboutComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.APP_ROUTING_MODULE],
            bootstrap: [app_component_1.AppComponent],
            providers: [racing_data_service_1.RacingDataService]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map