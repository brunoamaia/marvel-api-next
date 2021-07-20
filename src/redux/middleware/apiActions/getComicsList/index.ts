// @ts-nocheck
import md5 from 'md5'

import api from '../../../../services/api'

import { getComicsList } from '../../../reducers/ComicsList'

interface resultsProps {
  description: string,
  id: number,
  thumbnail: {
    path: string,
    extension: string
  }
  title: string,
}

interface ComicsListDataProps {
  data: {
    data: {
      results: Array<resultsProps>
    }
  }
}

interface responseProps {
  description: string,
  id: number,
  title: string,
  thumbnail: string
}

export const getDataHomepage = () => {
  return (dispatch: any) => {

    if (sessionStorage.getItem('ComicsListData')) {
      console.log("Dados do sessionStorage")
      dispatch(
        getComicsList(JSON.parse(sessionStorage.getItem('ComicsListData')))
      )


    } else {
      console.log("Dados da API")

      const marvelApi = {
        privateKey: process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY,
        publicKey: process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY,
        ts: 25 //Date.now()
      }
      const hash = md5(String(marvelApi.ts) + marvelApi.privateKey + marvelApi.publicKey)
      const url = `
        v1/public/comics
        ?ts=${marvelApi.ts}
        &apikey=${marvelApi.publicKey}
        &hash=${hash}
      `

      api
        .get(`${url.split(' ').join('')}`)
        .then((response: ComicsListDataProps) => {
          const comicsList: Array<responseProps> = []
          for (let i = 0; i < response.data.data.results.length; i++) {
            let thumbnailURL = `${response.data.data.results[i].thumbnail.path}`
              + '.' +
              `${response.data.data.results[i].thumbnail.extension}`

            comicsList[i] = {
              id: response.data.data.results[i].id,
              description: response.data.data.results[i].description,
              title: response.data.data.results[i].title,
              thumbnail: thumbnailURL,
            }
          }

          sessionStorage.setItem('ComicsListData', JSON.stringify(comicsList))
          dispatch(getComicsList(comicsList))
        })
        .catch((error) => {
          console.log(error)
        })
    }

  }
}
