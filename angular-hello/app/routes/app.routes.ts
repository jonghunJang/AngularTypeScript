import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "../components/about/about.component";
import {CarPartsComponent} from "../components/car-parts/car-parts.component";
import {ModuleWithProviders} from "@angular/core";

export const ROUTES:Routes = [
    {path:'',component:AboutComponent},
    {path:'carpart',component:CarPartsComponent}

];

export const APP_ROUTING_MODULE:ModuleWithProviders=
    RouterModule.forRoot(ROUTES);