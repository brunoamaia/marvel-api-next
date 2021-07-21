import axios from 'axios'
import md5 from 'md5'

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
})

export default api

// ciar token de acesso à api
const marvelApi = {
  privateKey: process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY,
  publicKey: process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY,
  ts: Date.now()
}
const hash = md5(String(marvelApi.ts) + marvelApi.privateKey + marvelApi.publicKey)

export const token = `?ts=${marvelApi.ts}` +
  `&apikey=${marvelApi.publicKey}` +
  `&hash=${hash}`
