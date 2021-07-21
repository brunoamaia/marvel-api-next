import { createAction, createReducer } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

interface ComicsDetailsProps {
  creators?: {
    colorist: Array<string> | undefined,
    cover: Array<string> | undefined,
    editor: Array<string> | undefined,
    inker: Array<string> | undefined,
    letterer: Array<string> | undefined,
    penciller: Array<string> | undefined,
    writer: Array<string> | undefined
  },
  description: string,
  published: string,
  id: number,
  thumbnail: string,
  title: string,
}

const INITIAL_STATE: ComicsDetailsProps = {
  creators: {
    colorist: undefined,
    cover: undefined,
    editor: undefined,
    inker: undefined,
    letterer: undefined,
    penciller: undefined,
    writer: undefined,
  },
  description: '',
  published: '',
  id: 0,
  thumbnail: '',
  title: '',
}

export const addComicDetails = createAction('UPDATE_COMICS_DETAILS')

export default createReducer(INITIAL_STATE, {
  [addComicDetails.type]: (state, action: AnyAction) => action.payload,
})
