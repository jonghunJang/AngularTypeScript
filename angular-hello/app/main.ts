import {Component, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MyColorDirective} from "./custom/color.directive";
import {MyDisplayDirective} from "./custom/display.directive";
import {OrdinalPipe} from "./custom/ordinal.pipe";
import {CalculateLengthPipe} from "./custom/calculateLength.pipe";

@Component(
    {selector : 'jhjang-App',
    template:`<h1>{{name | uppercase}}</h1> 
        <ul myColor="">
            <li *ngFor="let carPart of carParts; let i=index">
                <div [ngSwitch]="carPart.inStock">
                <h2 myColor>{{i+1 | ordinal}}. {{carPart.name}}</h2>
                <p>{{carPart.description | calculateLength}}</p>
                <p myHidden>Hidden Directive</p>
                 <p>{{carPart.price | currency:'EUR':true}}</p>
                <!--<p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>-->
                <!--<p *ngIf="carPart.inStock === 0">Out of Stock</p>-->
                <p *ngSwitchCase="0">Out of Stock.</p>
                <p *ngSwitchDefault="">{{carPart.inStock| calculateLength}} in Storck.</p>
                </div>
            </li>
        </ul>
    `})
class AppComponent{
    name:string='Ultra Racing';
    carParts =[{
        "id":1,
        "name":"Super Tires",
        "description":"These tires are the very best.",
        "inStock":5,
        "price":4.99
    },{
        "id":2,
        "name":"Reinforced Shocks",
        "description":"Shocks made from kryptonite.",
        "inStock":4,
        "price":9.99
    },{
        "id":3,
        "name":"Padded Seats",
        "description":"Super soft seats for a smooth ride.",
        "inStock":0,
        "price":24.99
    }]
}

@NgModule({
    declarations : [AppComponent, MyColorDirective, MyDisplayDirective, OrdinalPipe,CalculateLengthPipe],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})
class AppModule{
}
platformBrowserDynamic().bootstrapModule(AppModule);