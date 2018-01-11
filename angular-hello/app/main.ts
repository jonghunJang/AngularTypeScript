import {Component, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MyColorDirective} from "./custom/color.directive";
import {MyDisplayDirective} from "./custom/display.directive";
import {OrdinalPipe} from "./custom/ordinal.pipe";
import {CalculateLengthPipe} from "./custom/calculateLength.pipe";
import {StockPipe} from "./custom/stock.pipe";
import {AppComponent} from "./components/myapp/app.component";
import {CarPartsComponent} from "./components/car-parts/car-parts.component";
import {FormsModule} from "@angular/forms";
import {RacingDataService} from "./services/racing-data.service";
// import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {AboutComponent} from "./components/about/about.component";
import {APP_ROUTING_MODULE} from "./routes/app.routes";

@NgModule({
    declarations : [AppComponent, MyColorDirective, MyDisplayDirective, OrdinalPipe,CalculateLengthPipe,StockPipe,CarPartsComponent
    ,AboutComponent],
    imports:[BrowserModule,FormsModule,HttpModule,APP_ROUTING_MODULE],
    bootstrap:[AppComponent],
    providers:[RacingDataService]
})
class AppModule{
}
platformBrowserDynamic().bootstrapModule(AppModule);