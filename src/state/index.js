import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from 'state/counter/reducer'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counterReducer'],
}

const reducers = combineReducers({
  counterReducer,
})

export default persistReducer(persistConfig, reducers)
