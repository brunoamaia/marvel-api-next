// @ts-nocheck
import api, { token } from '../../../../services/api'

import { addComicDetails } from '../../../reducers/ComicDetails'

interface creatorsProps {
  colorist?: Array<string>,
  cover?: Array<string>,
  editor?: Array<string>,
  inker?: Array<string>,
  letterer?: Array<string>,
  penciller?: Array<string>,
  writer?: Array<string>,
}

interface responseProps {
  creators?: creatorsProps,
  description: string,
  published: string,
  id: number,
  thumbnail: string,
  title: string,
}

export const getComicDetails = (comicId: string) => {
  return (dispatch: any) => {
    const sessionData: string | null = sessionStorage.getItem(`Comic_${comicId}`)

    if (sessionData !== null) {
      console.log("Dados do sessionStorage")
      dispatch(
        addComicDetails(JSON.parse(sessionData))
      )

    } else if (comicId !== undefined && comicId !== '') {
      console.log("Dados da API")
      const route = `comics/${comicId}`

      api
        .get(`${route}${token}`)
        .then((response) => {

          const thumbnailURL = `${response.data.data.results[0].thumbnail.path}`
            + '.' +
            `${response.data.data.results[0].thumbnail.extension}`

          const creatorsArrow = response.data.data.results[0].creators.items
          let colorist = []
          let cover = []
          let editor = []
          let inker = []
          let letterer = []
          let penciller = []
          let writer = []
          for (let i = 0; i < creatorsArrow.length; i++) {
            if (creatorsArrow[i].role == 'penciller (cover)') {
              if (cover === []) {
                cover[0] = creatorsArrow[i].name;
              } else {
                cover.push(creatorsArrow[i].name)
              }

              if (penciller === []) {
                penciller[0] = creatorsArrow[i].name;
              } else {
                penciller.push(creatorsArrow[i].name)
              }

            } else if (creatorsArrow[i].role == 'colorist') {
              if (colorist === []) {
                colorist[0] = creatorsArrow[i].name;
              } else {
                colorist.push(creatorsArrow[i].name)
              }

            } else if (creatorsArrow[i].role == 'cover') {
              if (cover === []) {
                cover[0] = creatorsArrow[i].name;
              } else {
                cover.push(creatorsArrow[i].name)
              }

            } else if (creatorsArrow[i].role == 'editor') {
              if (editor === []) {
                editor[0] = creatorsArrow[i].name;
              } else {
                editor.push(creatorsArrow[i].name)
              }

            } else if (creatorsArrow[i].role == 'inker') {
              if (inker === []) {
                inker[0] = creatorsArrow[i].name;
              } else {
                inker.push(creatorsArrow[i].name)
              }

            } else if (creatorsArrow[i].role == 'letterer') {
              if (letterer === []) {
                letterer[0] = creatorsArrow[i].name;
              } else {
                letterer.push(creatorsArrow[i].name)
              }

            } else if (creatorsArrow[i].role == 'penciller' || creatorsArrow[i].role == 'penciler') {
              if (penciller === []) {
                penciller[0] = creatorsArrow[i].name;
              } else {
                penciller.push(creatorsArrow[i].name)
              }

            } else if (creatorsArrow[i].role == 'writer') {
              if (writer === []) {
                writer[0] = creatorsArrow[i].name;
              } else {
                writer.push(creatorsArrow[i].name)
              }

            } else {
              console.log(`sobrou: ${creatorsArrow[i].role}`);
            }
          }

          const comicDetails: responseProps = {
            creators: {
              colorist: colorist,
              cover: cover,
              editor: editor,
              inker: inker,
              letterer: letterer,
              penciller, penciller,
              writer: writer,
            },
            id: response.data.data.results[0].id,
            description: response.data.data.results[0].description,
            published: response.data.data.results[0].dates[0].date,
            title: response.data.data.results[0].title,
            thumbnail: thumbnailURL,
          }

          sessionStorage.setItem(`Comic_${comicId}`, JSON.stringify(comicDetails))
          dispatch(addComicDetails(comicDetails))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
