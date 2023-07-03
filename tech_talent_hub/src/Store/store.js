import {configureStore} from '@reduxjs/toolkit';

// Imported slices

import authReducer from './authSlice';
import navbarReducer from './navbarSlice';

//

const store = configureStore({
    reducer:{
        auth: authReducer,
        navbar: navbarReducer,
    }
});

export default store;