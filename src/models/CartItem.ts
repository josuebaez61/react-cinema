import { Cinema } from "./Cinema";
import { MovieDetail } from "./Movies";

export enum ItemType {
    movie = 'movie',
    aditional = 'aditional'
}

export class CartItem {
    itemDetail: MovieDetail; // TODO tambien deberia de ser tipo Aditional
    quantity: number;
    cinema: Cinema; 
    type: ItemType;
    unit_price: number;
    constructor( 
        itemDetail: MovieDetail,
        quantity: number,
        cinema: Cinema,
        type: ItemType,
        unit_price: number
    ) {
        this.itemDetail = itemDetail;
        this.quantity = quantity;
        this.cinema = cinema;
        this.type = type;
        this.unit_price = unit_price;
    }
}