import { productsConstants } from '../constants/products';

export function products(state = {product: {}}, action) {
    switch (action.type) {
        case productsConstants.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case productsConstants.GET_PRODUCTS_SUCCESS:
            return {
                
                ...state,
                loading: false,
                items: action.products,
                pages: action.pages
            };
        case productsConstants.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case productsConstants.GET_TOP_PRODUCTS_REQUEST:
            return {
                ...state,
                topLoading: true,
                top: null
            };
        case productsConstants.GET_TOP_PRODUCTS_SUCCESS:
            return {
                
                ...state,
                topLoading: false,
                top: action.products,
            };
        case productsConstants.GET_TOP_PRODUCTS_FAILURE:
            return {
                ...state,
                topLoading: false,
                error: action.error
            };
            
        case productsConstants.GET_PRODUCTS_AUTOCOMPLETE_REQUEST:
            return {
                ...state,
                autocomplete_items: [],
                loading: true
            };
        case productsConstants.GET_PRODUCTS_AUTOCOMPLETE_SUCCESS:
            return {
                
                ...state,
                loading: false,
                autocomplete_items: action.products
            };
        case productsConstants.GET_PRODUCTS_AUTOCOMPLETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case productsConstants.GET_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case productsConstants.GET_PRODUCT_DETAILS_SUCCESS:
            let product = state.product;
            product[action.id] = action.product;
            return {
                ...state,
                loading: false,
                product: product
            };
        case productsConstants.GET_PRODUCT_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
     
     
        default:
            return state
    }
} 