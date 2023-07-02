import {configureStore} from '@reduxjs/toolkit';

// Imported slices

import authReducer from './authSlice';

//

const store = configureStore({
    reducer:{
        auth: authReducer,
    }
});

export default store;