export interface Product {
    badges?: Record<ProductBadgeType, ProductBadge>;
    brandId: number;
    brandName: string;
    code: string;
    deliveryFeeCode: string;
    isFavorite: boolean;
    isSoldOut: boolean;
    name: string;
    price: ProductPrice;
    statusCode: string;
    url: string;
}

export type  ProductBadgeType = 'attribute' | 'custom' | 'recommend'

export interface ProductBadge {
    goodsCode: string;
    id: number;
    inOrder: number;
    isAuto: boolean;
    name: string;
    type: string;
}

export interface ProductPrice {
    discountRate: number;
    maxDiscountRate: number;
    maxDiscountPrice: number;
    real: number;
    tag: number
}
