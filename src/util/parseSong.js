import {Base64} from 'js-base64'
export function formatSong(lyric){
    let data= Base64.decode(lyric)
  return data
}