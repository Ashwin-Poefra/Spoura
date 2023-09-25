
export interface User {
    id: number,
    name: null | string,
    email: string,
    profileViews: number,
    role: "USER" | "ADMIN",
    purchase: JSON,
    sessions: Session[]
}

export interface Session {
    id: number,
    sessionString: string,
    user: User,
    cartProducts: Product[],
    favouriteProducts: Product[],
}

export interface Collection {
    id: number,
    name: string,
    url_slug: string,
    banner: string,
    products: Product[]
}

export interface Product {
    id: number,
    name: string,
    price: number,
    imgurl: string,
    colour: JSON,
    fit: string,
    size: null | string,
    brand: string,
    category: string,
    col_banner: null | string,
    col_id: null | number,
    col_name: null | string,
    col_slug: null | string,
    description: null | string,
    quantity: null | number,
    collection: Collection,
    inCart: Session[],
    inFavourite: Session[]
}