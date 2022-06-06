import React from 'react'
import { Product } from './product';
import moment from 'moment';

export interface Order {
    amount: number;
    created: number;
    items: Product[];
    tyoe: "card" | "cash" ;
}

export class Order implements Order {
    constructor(init?: Order) {
        if(init){
            const timestamp = init.created as any;
            init.created = moment(timestamp.toDate()).unix(); 
        }
        Object.assign(this, init);
    }

}
