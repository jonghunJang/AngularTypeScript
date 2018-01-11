import{Injectable} from "@angular/core";
import {CAR_PARTS} from "../data/mocks";
// import {HttpClient} from "@angular/common/http";
import {CarPart} from "../models/car-part";

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RacingDataService{


    constructor(private http : Http){

    }
    getCarParts():Observable<CarPart[]>{
        //소스 내 만들어진 data 바인딩 할시
        // return this.http.get('app/data/car-parts.json').map(response => <CarPart[]>response.json().data);
        //외부 서버 api 통해서 받은 데이터 바인딩 할 시
        return this.http.get('http://localhost:52273/products')
            .map(response => <CarPart[]> response.json().data);
    }
/*
    getTranslate(text:string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://localhost:52273/translate', `text=${text}`, {headers:headers})
            .map(response => response.json().message.result);
    }
    */
/*
    constructor(private httpclient : HttpClient){

    }
    getCarParts() :Observable<CarPart[]>{
        return this.httpclient.get('app/data/car-parts.json', {observe: 'response',responseType: 'json'}).map(response => <CarPart[]>response['data']);
    }
*/
}