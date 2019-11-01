import {Base64} from 'js-base64'
export function formatSong(lyric){
    return Base64.decode(lyric)
}