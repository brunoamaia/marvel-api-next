import { createAction, createReducer } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

interface ComicsListProps {
  description: string,
  id: number,
  title: string,
  thumbnail: string
}

const INITIAL_STATE: Array<ComicsListProps> = []

export const getComicsList = createAction('UPDATE_COMICS_LIST')

export default createReducer(INITIAL_STATE, {
  [getComicsList.type]: (state, action: AnyAction) => action.payload,
})
