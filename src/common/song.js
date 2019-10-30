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
        image:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}`,
        url:`http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400${musicData.songmid}.m4a?fromtag=38&guid=5931742855&vkey=${vkey}`
    })
}

function createSing(singer){
  let arr=[];
  for(let m of singer){
    arr.push(m.name)
  }
  return arr.join("/")
}