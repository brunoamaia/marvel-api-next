import { configureStore } from '@reduxjs/toolkit'

import apiComicsListReducer from '../reducers/ComicsList'

export default configureStore({
  reducer: {
    apiComicsList: apiComicsListReducer,
  },
})