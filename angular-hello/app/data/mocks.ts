import {CarPart} from "../models/car-part";

export const CAR_PARTS:CarPart[]=[{
    "id":1,
    "name":"Super Tires",
    "description":"These tires are the very best.",
    "inStock":5,
    "price":4.99,
    "image":"images/tires.jpg",
    "featured":false,
    "quantity":0
},{
    "id":2,
    "name":"Reinforced Shocks",
    "description":"Shocks made from kryptonite.",
    "inStock":4,
    "price":9.99,
    "image":"images/shocks.jpg",
    "featured":true,
        "quantity":0
},{
    "id":3,
    "name":"Padded Seats",
    "description":"Super soft seats for a smooth ride.",
    "inStock":0,
    "price":24.99,
    "image":"images/seats.jpg",
    "featured":false,
        "quantity":0
}];