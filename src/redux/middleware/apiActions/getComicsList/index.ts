// @ts-nocheck
import api, { token } from '../../../../services/api'

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
    const sessionData: string | null = sessionStorage.getItem('ComicsListData')

    if (sessionData !== null) {
      console.log("Dados do sessionStorage")
      dispatch(
        getComicsList(JSON.parse(sessionData))
      )

    } else {
      console.log("Dados da API")
      const route = 'comics'

      api
        .get(`${route}${token}`)
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
