import { configureStore } from '@reduxjs/toolkit'

import apiComicsListReducer from '../reducers/ComicsList'
import apiComicsDetailsReducer from '../reducers/ComicDetails'

export default configureStore({
  reducer: {
    apiComicsList: apiComicsListReducer,
    apiComicsDetails: apiComicsDetailsReducer
  },
})