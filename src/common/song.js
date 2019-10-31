class song{
    constructor({id,vkey,mid,name,singer,album,duration,image,url}){
       this.id=id;
       this.vkey=vkey;
       this.mid=mid;
       this.name=name;
       this.singer=singer;
       this.album=album;
       this.duration=duration;
       this.image=image;
       this.url=url;
    }
}
export default function createSong(musicData,vkey){
    return new song({
        id:musicData.songid,
        vkey:vkey,
        mid:musicData.songmid,
        name:musicData.songname,
        singer:createSing(musicData.singer),
        album:musicData.albumname,
        duration:musicData.interval,
        image:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
       // url:`http://117.41.241.21/amobile.music.tc.qq.com/C400${musicData.songmid}.m4a?fromtag=66uin=5285&guid=907481888&vkey=${vkey}`
         url:'http://117.41.241.21/amobile.music.tc.qq.com/C400003JUZnW14KntW.m4a?guid=907481888&vkey=E42D77FF74AB15A10C730A6F32EA23D11DC8F848E0908681820E75027DC5A290D39FC1E73006BD408B16C0A99B7F78AE2CE812BD4968D050&uin=5285&fromtag=66' //
    })
}

function createSing(singer){
  let arr=[];
  for(let m of singer){
    arr.push(m.name)
  }
  return arr.join("/")
}