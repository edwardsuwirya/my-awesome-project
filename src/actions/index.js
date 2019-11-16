export const authUser = (user) => {
    return {
        type: 'AUTH_USER',
        payload: user
    };
};

export const changeUserSession = (isAuthenticated) => {
    return {
        type: 'IS_AUTHENTICATED',
        payload: isAuthenticated
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};

export const setListProductAction = (setListProduct) => {
    return {
        type: 'SET_LIST_PRODUCT',
        payload: setListProduct
    }
};

export const updateProductAction = (product) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: product
    }
};
export const getListProductAction = () => {
    return {
        type: 'GET_LIST_PRODUCT'
    }
};