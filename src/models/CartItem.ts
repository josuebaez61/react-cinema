import { Additional } from "./Additional";
import { Cinema } from "./Cinema";
import { MovieDetail } from "./Movies";

export enum ItemType {
    movie = 'movie',
    additional = 'additional'
}

export class CartItem {
    itemDetail: MovieDetail | Additional; // TODO tambien deberia de ser tipo Aditional
    quantity: number;
    cinema: Cinema | null = null; 
    type: ItemType;
    unit_price: number;
    constructor( 
        itemDetail: MovieDetail | Additional,
        quantity: number,
        type: ItemType,
        unit_price: number,
        cinema?: Cinema,
    ) {
        this.itemDetail = itemDetail;
        this.quantity = quantity;
        this.type = type;
        this.unit_price = unit_price;
        cinema && (this.cinema = cinema);
    }
}