export const getListProduct = (userActive = {}, action) => {
    if (action.type === 'LIST_PRODUCT') {
        return action.payload;
    }
    return userActive;
};