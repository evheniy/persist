export const TEST_TYPE = 'TEST_TYPE';

export const testAction = () => ({ TEST_TYPE });

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case TEST_TYPE:
            return { ...state };
            break;
        default:
            return state;
    }
};
