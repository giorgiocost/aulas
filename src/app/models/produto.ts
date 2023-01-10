export interface Product {
    id: number; 
    name?: string; 
    url:string;
    price: number;
    evaluation: {
        name: string,
        comment: string,
    }[];
}