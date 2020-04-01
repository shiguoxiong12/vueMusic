const defaultSong=[
    {
        id:"0",
        vkey:"",
        mid:"",
        name:"真的爱你",
        singer:"BEYOND",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000000eOgmK1fN8Cs.jpg?max_age=2592000",
        url:'http://117.41.241.21/amobile.music.tc.qq.com/C400002EPQGU2gNnKe.m4a?guid=807259088&amp;vkey=B88370D57547269B3E9381B66F1CF1260EC717F8760BE0A4516E0572DAE3D67AD833FA7A8429CCD1D2D8A03A559A25843DB0C7F37331004F&amp;uin=5285&amp;fromtag=66"><source src="http://117.41.241.21/amobile.music.tc.qq.com/C400002EPQGU2gNnKe.m4a?guid=807259088&amp;vkey=B88370D57547269B3E9381B66F1CF1260EC717F8760BE0A4516E0572DAE3D67AD833FA7A8429CCD1D2D8A03A559A25843DB0C7F37331004F&amp;uin=5285&amp;fromtag=66',
        lyric:"W3RpOuecn+eahOeIseS9oF0KW2FyOkJFWU9ORF0KW2FsOui2hei2ikJleW9uZOeyvumAiSAyMFRIIEFubml2ZXJzYXJ5XQpbYnk6XQpbb2Zmc2V0OjBdClswMDowMC4wMF3nnJ/nmoTniLHkvaAgKOOAiuaRhua4oeS6uuOAi+eUteW9seaPkuabsikgLSBCRVlPTkQKWzAwOjA4LjQxXeivje+8muWwj+e+jgpbMDA6MTYuODNd5puy77ya6buE5a626am5ClswMDoyNS4yNV3ml6Dms5Xlj6/kv67ppbDnmoTkuIDlr7nmiYsKWzAwOjI5LjE4XeW4puWHuua4qeaaluawuOi/nOWcqOiDjOWQjgpbMDA6MzIuMjhd57q15L2/5ZWw5Zem5aeL57uI5YWz5rOoClswMDozNC4yMF3kuI3mh4Lnj43mg5zlpKrlhoXnlpoKWzAwOjM3LjcxXeayiemGieS6jumfs+mYtuWlueS4jei1nui1jwpbMDA6NDEuNjBd5q+N5Lqy55qE54ix5Y205rC45pyq6YCA6K6pClswMDo0NC43M13lhrPlv4PlhrLlvIDlv4PkuK3mjKPmiY4KWzAwOjQ2LjcwXeS6suaBqee7iOWPr+aKpeetlApbMDA6NDkuNzhdClswMDo1MC41OF3mmKXpo47ljJbpm6jmmpbpgI/miJHnmoTlv4MKWzAwOjUzLjY4XeS4gOeUn+ect+mhvuaXoOiogOWcsOmAgei1oApbMDA6NTcuNTddClswMDo1OC4zN13mmK/kvaDlpJrkuYjmuKnppqjnmoTnm67lhYkKWzAxOjAxLjY4XeaVmeaIkeWdmuavheacm+edgOWJjei3rwpbMDE6MDQuOThd5Y+u5Zix5oiR6LeM5YCS5LiN5bqU5pS+5byDClswMToxMC4wNl0KWzAxOjEwLjg1Xeayoeazleino+mHiuaAjuWPr+aKpeWwveS6suaBqQpbMDE6MTQuMzNd54ix5oSP5a695aSn5piv5peg6ZmQClswMToxNy40Ml3or7flh4bmiJHor7Tlo7DnnJ/nmoTniLHkvaAKWzAxOjIyLjg3XQpbMDE6MzUuNzVd5peg5rOV5Y+v5L+u6aWw55qE5LiA5a+55omLClswMTozOS4yNF3luKblh7rmuKnmmpbmsLjov5zlnKjog4zlkI4KWzAxOjQyLjQxXee6teS9v+WVsOWXpuWni+e7iOWFs+azqApbMDE6NDQuMzFd5LiN5oeC54+N5oOc5aSq5YaF55aaClswMTo0Ny43N13ku43orrDotbfmuKnppqjnmoTkuIDlr7nmiYsKWzAxOjUxLjc0XeWni+e7iOe7meaIkeeFp+mhvuacquWPmOagtwpbMDE6NTQuODVd55CG5oOz5LuK5aSp57uI5LqO562J5YiwClswMTo1Ni43OF3liIbkuqvlhYnovonnm7zlgZrliLAKWzAyOjAwLjEyXQpbMDI6MDAuNjVd5pil6aOO5YyW6Zuo5pqW6YCP5oiR55qE5b+DClswMjowMy43OF3kuIDnlJ/nnLfpob7ml6DoqIDlnLDpgIHotaAKWzAyOjA4LjQ3XeaYr+S9oOWkmuS5iOa4qemmqOeahOebruWFiQpbMDI6MTEuOTZd5pWZ5oiR5Z2a5q+F5pyb552A5YmN6LevClswMjoxNS4wOF3lj67lmLHmiJHot4zlgJLkuI3lupTmlL7lvIMKWzAyOjIwLjM3XQpbMDI6MjAuOThd5rKh5rOV6Kej6YeK5oCO5Y+v5oql5bC95Lqy5oGpClswMjoyNC40Ml3niLHmhI/lrr3lpKfmmK/ml6DpmZAKWzAyOjI3LjUzXeivt+WHhuaIkeivtOWjsOecn+eahOeIseS9oApbMDI6MzIuNTddClswMjo1OC40N13mmKXpo47ljJbpm6jmmpbpgI/miJHnmoTlv4MKWzAzOjAxLjM5XeS4gOeUn+ect+mhvuaXoOiogOWcsOmAgei1oApbMDM6MDUuMzBdClswMzowNi4wOF3mmK/kvaDlpJrkuYjmuKnppqjnmoTnm67lhYkKWzAzOjA5LjYwXeaVmeaIkeWdmuavheacm+edgOWJjei3rwpbMDM6MTIuNjVd5Y+u5Zix5oiR6LeM5YCS5LiN5bqU5pS+5byDClswMzoxNy43Ml0KWzAzOjE4LjU1Xeayoeazleino+mHiuaAjuWPr+aKpeWwveS6suaBqQpbMDM6MjIuMDJd54ix5oSP5a695aSn5piv5peg6ZmQClswMzoyNS4xMl3or7flh4bmiJHor7Tlo7DnnJ/nmoTniLHkvaAKWzAzOjMwLjE3XQpbMDM6MzAuOThd5piv5L2g5aSa5LmI5rip6aao55qE55uu5YWJClswMzozNC40OF3mlZnmiJHlnZrmr4XmnJvnnYDliY3ot68KWzAzOjM3LjYwXeWPruWYseaIkei3jOWAkuS4jeW6lOaUvuW8gwpbMDM6NDMuNDFd5rKh5rOV6Kej6YeK5oCO5Y+v5oql5bC95Lqy5oGpClswMzo0Ni45MV3niLHmhI/lrr3lpKfmmK/ml6DpmZAKWzAzOjUwLjA5Xeivt+WHhuaIkeivtOWjsOecn+eahOeIseS9oA=="
    },
    {
        id:"1",
        vkey:"",
        mid:"",
        name:"还有多少个十年",
        singer:"叶圣涛",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001brQho2KVKTU.jpg?max_age=2592000",
        url:'http://220.170.89.159/amobile.music.tc.qq.com/C400002C67BX3C3mpn.m4a?guid=5714054048&amp;vkey=402DD114309D11E75C3520D02C5CB249FFF947541449D6FE99CC0979493E9033D6D3B93BB2476DB6EC881C97206466861CE60DBFDA4A3659&amp;uin=5285&amp;fromtag=66',
        lyric:"W3RpOui/mOacieWkmuWwkeS4quWNgeW5tCAo5Y6f54mIKV0KW2FyOuWPtuWco+a2m10KW2FsOui/mOacieWkmuWwkeS4quWNgeW5tO+8iOWOn+eJiO+8iV0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuOTBd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ICjljp/niYgpIC0g5Y+25Zyj5rabClswMDowNC42Ml3or43vvJrlj7blnKPmtpsKWzAwOjA1LjgxXeabsu+8muWPtuWco+a2mwpbMDA6MDcuMDJd5LyB5YiS5Lq677ya546L54Oo5omsClswMDowOC45M13lj5HooYzkurrvvJrmoZHniLEKWzAwOjEwLjUwXeWPkeihjOaWue+8mueci+ingemfs+S5kO+8iOWMl+S6rO+8ieaciemZkOWFrOWPuApbMDA6MzIuNjFd6YKj5Lqb5bm05oiR5Lus5pu+5pyd5aSV55u45ZCRClswMDozNS44Nl3kuIDotbfnjqnnrJHkuIDotbfmg4bmgIUKWzAwOjM5Ljg1Xei/meS6m+W5tOaIkeS7rOS5n+aciei/h+W9t+W+qApbMDA6NDMuMjdd5Li65LqG55Sf5rS75Lmf5Li65LqG55CG5oOzClswMDo0Ny4zNV3kuIDovazlv7XljbTlt7Lov4fkuobljYHlubQKWzAwOjUwLjc5XemCo+S6m+WtpOeLrOWPquiDveS4juS9oOiusgpbMDA6NTQuODBd5pyJ6L+H5Lqb5oiQ5Yqf5oiR5Lus5LiA6LW35YiG5LqrClswMDo1OC4yNl3mnJ/lvoXkuIvkuKrnsr7lvannmoTlvIDlnLoKWzAxOjA2LjE3Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDE6MDkuNzNd6IO95YuH5pWi5YGa54Ot6KGA6Z2S5bm0ClswMToxMy41NF3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAxOjE3LjE2XeiDveWdmuaMgeW9k+WIneeahOS/oeW/tQpbMDE6MjEuMDFd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMToyNC41M13og73kuI3lv5jmgIDlm57lv4bngrnngrkKWzAxOjI4LjQ1Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDE6MzIuMDRd6IO96K6w6LW36Z2S5pil55qE5a656aKcClswMTo1My4wNl3kuIDovaznnLzlj4jluqbov4fkuobljYHlubQKWzAxOjU2LjQxXeaIkeS7rOS+neeEtua3i+a8k+mFo+eVhQpbMDI6MDAuNDRd5aSa5bCR5Lq66L+H5a6i6Iis5L2g5p2l5oiR5b6AClswMjowMy45MF3mgLvmnInkupvkurpUQeWunuWxnumavuW/mApbMDI6MDcuOTdd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMjoxMS41MF3og73li4fmlaLlgZrng63ooYDpnZLlubQKWzAyOjE1LjQzXei/mOacieWkmuWwkeS4quWNgeW5tApbMDI6MTguODVd6IO95Z2a5oyB5b2T5Yid55qE5L+h5b+1ClswMjoyMi45Ml3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAyOjI2LjMxXeiDveS4jeW/mOaAgOWbnuW/hueCueeCuQpbMDI6MzAuNDNd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMjozMy44OF3og73orrDotbfpnZLmmKXnmoTlrrnpopwKWzAyOjU4LjY5Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDM6MDIuMTJd6IO95YuH5pWi5YGa54Ot6KGA6Z2S5bm0ClswMzowNi4wN13ov5jmnInlpJrlsJHkuKrljYHlubQKWzAzOjA5LjU2XeiDveWdmuaMgeW9k+WIneeahOS/oeW/tQpbMDM6MTMuNjBd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMzoxNy4wNF3og73kuI3lv5jmgIDlm57lv4bngrnngrkKWzAzOjIwLjk4Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDM6MjQuNTJd6IO96K6w6LW36Z2S5pil55qE5a656aKcClswMzoyOC42Nl3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAzOjMyLjAzXeiDveS4jeW/mOaAgOWbnuW/hueCueeCuQpbMDM6MzYuMDRd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMzozOS40OV3og73orrDotbfpnZLmmKXnmoTlrrnpopwKWzAzOjQ1LjgyXeWkmuWwkeW5tOaAu+W4jOacm+maj+W/g+aJgOWQkQpbMDM6NDguOTRd5LiN6LCI5bel5L2c5Lmf5LiN6LCI55CG5oOzClswMzo1Mi43Nl3ov5nmoLfnmoTml6XlrZDkuZ/kuI3nlKjlpKrplb8KWzAzOjU2LjQ1XeWPquaDs+WlveWlveeahOeXm+W/q+S4gOWcug=="
    },
    {
        id:"2",
        vkey:"",
        mid:"",
        name:"天下",
        singer:"张杰",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000034bzu226F71i.jpg?max_age=2592000",
        url:'http://58.49.111.17/amobile.music.tc.qq.com/C400001BwR1R1Tz2Lf.m4a?guid=5714054048&amp;vkey=6AEF4A97D253D5AC4B50AB758A5A2407F4D2BE49F5949F79E381163B0928986ACC7DD7ED8739B0D6CBDD7B2E84E871DFCAD03229937D122E&amp;uin=5285&amp;fromtag=66',
        lyric:""
    },
    {
        id:"3",
        vkey:"",
        mid:"",
        name:"海闊天空",
        singer:"BEYOND",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004CLlFV0mj6fC.jpg?max_age=2592000",
        url:'http://117.41.241.19/amobile.music.tc.qq.com/C400000XLtiO1pYlSu.m4a?guid=5714054048&amp;vkey=44E955DC0C883C9A91B732DD43E6161E398F196CB2DE597270FD52B3D0AE38BCBE6A8A0840DA9193C662503B2DE6044F4952D125A43B5253&amp;uin=5285&amp;fromtag=66%22%3E%3Csource%20src=%22http://117.41.241.19/amobile.music.tc.qq.com/C400000XLtiO1pYlSu.m4a?guid=5714054048&amp;vkey=44E955DC0C883C9A91B732DD43E6161E398F196CB2DE597270FD52B3D0AE38BCBE6A8A0840DA9193C662503B2DE6044F4952D125A43B5253&amp;uin=5285&amp;fromtag=66',
        lyric:"W3RpOua1t+mYlOWkqeepul0KW2FyOkJFWU9ORF0KW2FsOua1t+mYlOWkqeepul0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMDBd5rW36ZiU5aSp56m6ICjjgIrkuZ3kupQy54+t44CL572R57uc55S15b2x5o+S5puyKSAtIEJFWU9ORApbMDA6MDYuMjNd6K+N77ya6buE5a626am5ClswMDoxMi40Nl3mm7LvvJrpu4TlrrbpqbkKWzAwOjE4LjY5XeS7iuWkqeaIkeWvkuWknOmHjOeci+mbqumjmOi/hwpbMDA6MjUuMTVd5oCA552A5Ya35Y205LqG55qE5b+D56qd6aOY6L+c5pa5ClswMDoyOS45OV0KWzAwOjMxLjA5XemjjumbqOmHjOi/vei1tgpbMDA6MzQuMThd6Zu+6YeM5YiG5LiN5riF5b2x6LiqClswMDozNi43Ml0KWzAwOjM3LjMyXeWkqeepuua1t+mYlOS9oOS4juaIkQpbMDA6NDAuNDhd5Y+v5Lya5Y+YIOiwgeayoeWcqOWPmApbMDA6NDMuNjld5aSa5bCR5qyh6L+O552A5Ya355y85LiO5Ziy56yRClswMDo1MC4wNF3ku47msqHmnInmlL7lvIPov4flv4PkuK3nmoTnkIbmg7MKWzAwOjU0LjI1XQpbMDA6NTUuODld5LiA5Yi56YKj5oGN5oOaClswMDo1OS4wOV3oi6XmnInmiYDlpLHnmoTmhJ/op4kKWzAxOjAyLjE0XeS4jeefpeS4jeinieW3suWPmOa3oQpbMDE6MDUuMjdd5b+D6YeM54ixIOiwgeaYjueZveaIkQpbMDE6MDguMDhdClswMTowOC45M13ljp/osIXmiJHov5nkuIDnlJ/kuI3nvoHmlL7nurXniLHoh6rnlLEKWzAxOjE0LjIzXQpbMDE6MTUuOThd5Lmf5Lya5oCV5pyJ5LiA5aSp5Lya6LeM5YCSClswMToyMC44NF0KWzAxOjIyLjA5XeiDjOW8g+S6hueQhuaDs+iwgeS6uumDveWPr+S7pQpbMDE6MjcuMzBdClswMToyOC4zMV3lk6rkvJrmgJXmnInkuIDlpKnlj6rkvaDlhbHmiJEKWzAxOjMxLjkxXQpbMDE6NDMuMDJd5LuK5aSp5oiR5a+S5aSc6YeM55yL6Zuq6aOY6L+HClswMTo0OC45Nl0KWzAxOjQ5LjQ5XeaAgOedgOWGt+WNtOS6hueahOW/g+eqnemjmOi/nOaWuQpbMDE6NTQuMzhdClswMTo1NS4zMl3po47pm6jph4zov73otbYKWzAxOjU4LjQwXembvumHjOWIhuS4jea4heW9sei4qgpbMDI6MDAuOTNdClswMjowMS40Nl3lpKnnqbrmtbfpmJTkvaDkuI7miJEKWzAyOjA0LjcyXeWPr+S8muWPmCDosIHmsqHlnKjlj5gKWzAyOjA3LjYwXQpbMDI6MDguMjld5Y6f6LCF5oiR6L+Z5LiA55Sf5LiN576B5pS+57q154ix6Ieq55SxClswMjoxMy45NV0KWzAyOjE1LjIyXeS5n+S8muaAleacieS4gOWkqeS8mui3jOWAkgpbMDI6MjAuMjRdClswMjoyMS41NV3og4zlvIPkuobnkIbmg7PosIHkurrpg73lj6/ku6UKWzAyOjI2LjQ4XQpbMDI6MjcuNzRd5ZOq5Lya5oCV5pyJ5LiA5aSp5Y+q5L2g5YWx5oiRClswMjozMS41Nl0KWzAzOjA4LjgwXeS7jeeEtuiHqueUseiHquaIkQpbMDM6MTEuMjJdClswMzoxMi4yMV3msLjov5zpq5jllLHmiJHmrYwKWzAzOjE0Ljc0XQpbMDM6MTUuMzJd6LWw6YGN5Y2D6YeMClswMzoxOS4yOF0KWzAzOjIwLjEwXeWOn+iwheaIkei/meS4gOeUn+S4jee+geaUvue6teeIseiHqueUsQpbMDM6MjUuMjldClswMzoyNy4wMl3kuZ/kvJrmgJXmnInkuIDlpKnkvJrot4zlgJIKWzAzOjMxLjI3XQpbMDM6MzMuMDhd6IOM5byD5LqG55CG5oOz6LCB5Lq66YO95Y+v5LulClswMzozOC40Ml0KWzAzOjM5LjMxXeWTquS8muaAleacieS4gOWkqeWPquS9oOWFseaIkQpbMDM6NDQuMThdClswMzo0NS44MV3og4zlvIPkuobnkIbmg7PosIHkurrpg73lj6/ku6UKWzAzOjUwLjY4XQpbMDM6NTEuOTVd5ZOq5Lya5oCV5pyJ5LiA5aSp5Y+q5L2g5YWx5oiRClswMzo1Ni42N10KWzAzOjU3LjQ2XeWOn+iwheaIkei/meS4gOeUn+S4jee+geaUvue6teeIseiHqueUsQpbMDQ6MDIuODVdClswNDowNC4zMV3kuZ/kvJrmgJXmnInkuIDlpKnkvJrot4zlgJIKWzA0OjA4LjE2XQpbMDQ6MTAuMzNd6IOM5byD5LqG55CG5oOz6LCB5Lq66YO95Y+v5LulClswNDoxNS43OV0KWzA0OjE2LjkxXeWTquS8muaAleacieS4gOWkqeWPquS9oOWFseaIkQ=="
    },
    {
        id:"4",
        vkey:"",
        mid:"",
        name:"还有多少个十年",
        singer:"叶圣涛",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001brQho2KVKTU.jpg?max_age=2592000",
        url:'http://220.170.89.159/amobile.music.tc.qq.com/C400002C67BX3C3mpn.m4a?guid=5714054048&amp;vkey=402DD114309D11E75C3520D02C5CB249FFF947541449D6FE99CC0979493E9033D6D3B93BB2476DB6EC881C97206466861CE60DBFDA4A3659&amp;uin=5285&amp;fromtag=66',
        lyric:"W3RpOui/mOacieWkmuWwkeS4quWNgeW5tCAo5Y6f54mIKV0KW2FyOuWPtuWco+a2m10KW2FsOui/mOacieWkmuWwkeS4quWNgeW5tO+8iOWOn+eJiO+8iV0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuOTBd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ICjljp/niYgpIC0g5Y+25Zyj5rabClswMDowNC42Ml3or43vvJrlj7blnKPmtpsKWzAwOjA1LjgxXeabsu+8muWPtuWco+a2mwpbMDA6MDcuMDJd5LyB5YiS5Lq677ya546L54Oo5omsClswMDowOC45M13lj5HooYzkurrvvJrmoZHniLEKWzAwOjEwLjUwXeWPkeihjOaWue+8mueci+ingemfs+S5kO+8iOWMl+S6rO+8ieaciemZkOWFrOWPuApbMDA6MzIuNjFd6YKj5Lqb5bm05oiR5Lus5pu+5pyd5aSV55u45ZCRClswMDozNS44Nl3kuIDotbfnjqnnrJHkuIDotbfmg4bmgIUKWzAwOjM5Ljg1Xei/meS6m+W5tOaIkeS7rOS5n+aciei/h+W9t+W+qApbMDA6NDMuMjdd5Li65LqG55Sf5rS75Lmf5Li65LqG55CG5oOzClswMDo0Ny4zNV3kuIDovazlv7XljbTlt7Lov4fkuobljYHlubQKWzAwOjUwLjc5XemCo+S6m+WtpOeLrOWPquiDveS4juS9oOiusgpbMDA6NTQuODBd5pyJ6L+H5Lqb5oiQ5Yqf5oiR5Lus5LiA6LW35YiG5LqrClswMDo1OC4yNl3mnJ/lvoXkuIvkuKrnsr7lvannmoTlvIDlnLoKWzAxOjA2LjE3Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDE6MDkuNzNd6IO95YuH5pWi5YGa54Ot6KGA6Z2S5bm0ClswMToxMy41NF3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAxOjE3LjE2XeiDveWdmuaMgeW9k+WIneeahOS/oeW/tQpbMDE6MjEuMDFd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMToyNC41M13og73kuI3lv5jmgIDlm57lv4bngrnngrkKWzAxOjI4LjQ1Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDE6MzIuMDRd6IO96K6w6LW36Z2S5pil55qE5a656aKcClswMTo1My4wNl3kuIDovaznnLzlj4jluqbov4fkuobljYHlubQKWzAxOjU2LjQxXeaIkeS7rOS+neeEtua3i+a8k+mFo+eVhQpbMDI6MDAuNDRd5aSa5bCR5Lq66L+H5a6i6Iis5L2g5p2l5oiR5b6AClswMjowMy45MF3mgLvmnInkupvkurpUQeWunuWxnumavuW/mApbMDI6MDcuOTdd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMjoxMS41MF3og73li4fmlaLlgZrng63ooYDpnZLlubQKWzAyOjE1LjQzXei/mOacieWkmuWwkeS4quWNgeW5tApbMDI6MTguODVd6IO95Z2a5oyB5b2T5Yid55qE5L+h5b+1ClswMjoyMi45Ml3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAyOjI2LjMxXeiDveS4jeW/mOaAgOWbnuW/hueCueeCuQpbMDI6MzAuNDNd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMjozMy44OF3og73orrDotbfpnZLmmKXnmoTlrrnpopwKWzAyOjU4LjY5Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDM6MDIuMTJd6IO95YuH5pWi5YGa54Ot6KGA6Z2S5bm0ClswMzowNi4wN13ov5jmnInlpJrlsJHkuKrljYHlubQKWzAzOjA5LjU2XeiDveWdmuaMgeW9k+WIneeahOS/oeW/tQpbMDM6MTMuNjBd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMzoxNy4wNF3og73kuI3lv5jmgIDlm57lv4bngrnngrkKWzAzOjIwLjk4Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDM6MjQuNTJd6IO96K6w6LW36Z2S5pil55qE5a656aKcClswMzoyOC42Nl3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAzOjMyLjAzXeiDveS4jeW/mOaAgOWbnuW/hueCueeCuQpbMDM6MzYuMDRd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMzozOS40OV3og73orrDotbfpnZLmmKXnmoTlrrnpopwKWzAzOjQ1LjgyXeWkmuWwkeW5tOaAu+W4jOacm+maj+W/g+aJgOWQkQpbMDM6NDguOTRd5LiN6LCI5bel5L2c5Lmf5LiN6LCI55CG5oOzClswMzo1Mi43Nl3ov5nmoLfnmoTml6XlrZDkuZ/kuI3nlKjlpKrplb8KWzAzOjU2LjQ1XeWPquaDs+WlveWlveeahOeXm+W/q+S4gOWcug=="
    },
    {
        id:"5",
        vkey:"",
        mid:"",
        name:"天下",
        singer:"张杰",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000034bzu226F71i.jpg?max_age=2592000",
        url:'http://58.49.111.17/amobile.music.tc.qq.com/C400001BwR1R1Tz2Lf.m4a?guid=5714054048&amp;vkey=6AEF4A97D253D5AC4B50AB758A5A2407F4D2BE49F5949F79E381163B0928986ACC7DD7ED8739B0D6CBDD7B2E84E871DFCAD03229937D122E&amp;uin=5285&amp;fromtag=66',
        lyric:""
    },
    {
        id:"6",
        vkey:"",
        mid:"",
        name:"海闊天空",
        singer:"BEYOND",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004CLlFV0mj6fC.jpg?max_age=2592000",
        url:'http://117.41.241.19/amobile.music.tc.qq.com/C400000XLtiO1pYlSu.m4a?guid=5714054048&amp;vkey=44E955DC0C883C9A91B732DD43E6161E398F196CB2DE597270FD52B3D0AE38BCBE6A8A0840DA9193C662503B2DE6044F4952D125A43B5253&amp;uin=5285&amp;fromtag=66%22%3E%3Csource%20src=%22http://117.41.241.19/amobile.music.tc.qq.com/C400000XLtiO1pYlSu.m4a?guid=5714054048&amp;vkey=44E955DC0C883C9A91B732DD43E6161E398F196CB2DE597270FD52B3D0AE38BCBE6A8A0840DA9193C662503B2DE6044F4952D125A43B5253&amp;uin=5285&amp;fromtag=66',
        lyric:"W3RpOua1t+mYlOWkqeepul0KW2FyOkJFWU9ORF0KW2FsOua1t+mYlOWkqeepul0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMDBd5rW36ZiU5aSp56m6ICjjgIrkuZ3kupQy54+t44CL572R57uc55S15b2x5o+S5puyKSAtIEJFWU9ORApbMDA6MDYuMjNd6K+N77ya6buE5a626am5ClswMDoxMi40Nl3mm7LvvJrpu4TlrrbpqbkKWzAwOjE4LjY5XeS7iuWkqeaIkeWvkuWknOmHjOeci+mbqumjmOi/hwpbMDA6MjUuMTVd5oCA552A5Ya35Y205LqG55qE5b+D56qd6aOY6L+c5pa5ClswMDoyOS45OV0KWzAwOjMxLjA5XemjjumbqOmHjOi/vei1tgpbMDA6MzQuMThd6Zu+6YeM5YiG5LiN5riF5b2x6LiqClswMDozNi43Ml0KWzAwOjM3LjMyXeWkqeepuua1t+mYlOS9oOS4juaIkQpbMDA6NDAuNDhd5Y+v5Lya5Y+YIOiwgeayoeWcqOWPmApbMDA6NDMuNjld5aSa5bCR5qyh6L+O552A5Ya355y85LiO5Ziy56yRClswMDo1MC4wNF3ku47msqHmnInmlL7lvIPov4flv4PkuK3nmoTnkIbmg7MKWzAwOjU0LjI1XQpbMDA6NTUuODld5LiA5Yi56YKj5oGN5oOaClswMDo1OS4wOV3oi6XmnInmiYDlpLHnmoTmhJ/op4kKWzAxOjAyLjE0XeS4jeefpeS4jeinieW3suWPmOa3oQpbMDE6MDUuMjdd5b+D6YeM54ixIOiwgeaYjueZveaIkQpbMDE6MDguMDhdClswMTowOC45M13ljp/osIXmiJHov5nkuIDnlJ/kuI3nvoHmlL7nurXniLHoh6rnlLEKWzAxOjE0LjIzXQpbMDE6MTUuOThd5Lmf5Lya5oCV5pyJ5LiA5aSp5Lya6LeM5YCSClswMToyMC44NF0KWzAxOjIyLjA5XeiDjOW8g+S6hueQhuaDs+iwgeS6uumDveWPr+S7pQpbMDE6MjcuMzBdClswMToyOC4zMV3lk6rkvJrmgJXmnInkuIDlpKnlj6rkvaDlhbHmiJEKWzAxOjMxLjkxXQpbMDE6NDMuMDJd5LuK5aSp5oiR5a+S5aSc6YeM55yL6Zuq6aOY6L+HClswMTo0OC45Nl0KWzAxOjQ5LjQ5XeaAgOedgOWGt+WNtOS6hueahOW/g+eqnemjmOi/nOaWuQpbMDE6NTQuMzhdClswMTo1NS4zMl3po47pm6jph4zov73otbYKWzAxOjU4LjQwXembvumHjOWIhuS4jea4heW9sei4qgpbMDI6MDAuOTNdClswMjowMS40Nl3lpKnnqbrmtbfpmJTkvaDkuI7miJEKWzAyOjA0LjcyXeWPr+S8muWPmCDosIHmsqHlnKjlj5gKWzAyOjA3LjYwXQpbMDI6MDguMjld5Y6f6LCF5oiR6L+Z5LiA55Sf5LiN576B5pS+57q154ix6Ieq55SxClswMjoxMy45NV0KWzAyOjE1LjIyXeS5n+S8muaAleacieS4gOWkqeS8mui3jOWAkgpbMDI6MjAuMjRdClswMjoyMS41NV3og4zlvIPkuobnkIbmg7PosIHkurrpg73lj6/ku6UKWzAyOjI2LjQ4XQpbMDI6MjcuNzRd5ZOq5Lya5oCV5pyJ5LiA5aSp5Y+q5L2g5YWx5oiRClswMjozMS41Nl0KWzAzOjA4LjgwXeS7jeeEtuiHqueUseiHquaIkQpbMDM6MTEuMjJdClswMzoxMi4yMV3msLjov5zpq5jllLHmiJHmrYwKWzAzOjE0Ljc0XQpbMDM6MTUuMzJd6LWw6YGN5Y2D6YeMClswMzoxOS4yOF0KWzAzOjIwLjEwXeWOn+iwheaIkei/meS4gOeUn+S4jee+geaUvue6teeIseiHqueUsQpbMDM6MjUuMjldClswMzoyNy4wMl3kuZ/kvJrmgJXmnInkuIDlpKnkvJrot4zlgJIKWzAzOjMxLjI3XQpbMDM6MzMuMDhd6IOM5byD5LqG55CG5oOz6LCB5Lq66YO95Y+v5LulClswMzozOC40Ml0KWzAzOjM5LjMxXeWTquS8muaAleacieS4gOWkqeWPquS9oOWFseaIkQpbMDM6NDQuMThdClswMzo0NS44MV3og4zlvIPkuobnkIbmg7PosIHkurrpg73lj6/ku6UKWzAzOjUwLjY4XQpbMDM6NTEuOTVd5ZOq5Lya5oCV5pyJ5LiA5aSp5Y+q5L2g5YWx5oiRClswMzo1Ni42N10KWzAzOjU3LjQ2XeWOn+iwheaIkei/meS4gOeUn+S4jee+geaUvue6teeIseiHqueUsQpbMDQ6MDIuODVdClswNDowNC4zMV3kuZ/kvJrmgJXmnInkuIDlpKnkvJrot4zlgJIKWzA0OjA4LjE2XQpbMDQ6MTAuMzNd6IOM5byD5LqG55CG5oOz6LCB5Lq66YO95Y+v5LulClswNDoxNS43OV0KWzA0OjE2LjkxXeWTquS8muaAleacieS4gOWkqeWPquS9oOWFseaIkQ=="
    },
    {
        id:"7",
        vkey:"",
        mid:"",
        name:"还有多少个十年",
        singer:"叶圣涛",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001brQho2KVKTU.jpg?max_age=2592000",
        url:'http://220.170.89.159/amobile.music.tc.qq.com/C400002C67BX3C3mpn.m4a?guid=5714054048&amp;vkey=402DD114309D11E75C3520D02C5CB249FFF947541449D6FE99CC0979493E9033D6D3B93BB2476DB6EC881C97206466861CE60DBFDA4A3659&amp;uin=5285&amp;fromtag=66',
        lyric:"W3RpOui/mOacieWkmuWwkeS4quWNgeW5tCAo5Y6f54mIKV0KW2FyOuWPtuWco+a2m10KW2FsOui/mOacieWkmuWwkeS4quWNgeW5tO+8iOWOn+eJiO+8iV0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuOTBd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ICjljp/niYgpIC0g5Y+25Zyj5rabClswMDowNC42Ml3or43vvJrlj7blnKPmtpsKWzAwOjA1LjgxXeabsu+8muWPtuWco+a2mwpbMDA6MDcuMDJd5LyB5YiS5Lq677ya546L54Oo5omsClswMDowOC45M13lj5HooYzkurrvvJrmoZHniLEKWzAwOjEwLjUwXeWPkeihjOaWue+8mueci+ingemfs+S5kO+8iOWMl+S6rO+8ieaciemZkOWFrOWPuApbMDA6MzIuNjFd6YKj5Lqb5bm05oiR5Lus5pu+5pyd5aSV55u45ZCRClswMDozNS44Nl3kuIDotbfnjqnnrJHkuIDotbfmg4bmgIUKWzAwOjM5Ljg1Xei/meS6m+W5tOaIkeS7rOS5n+aciei/h+W9t+W+qApbMDA6NDMuMjdd5Li65LqG55Sf5rS75Lmf5Li65LqG55CG5oOzClswMDo0Ny4zNV3kuIDovazlv7XljbTlt7Lov4fkuobljYHlubQKWzAwOjUwLjc5XemCo+S6m+WtpOeLrOWPquiDveS4juS9oOiusgpbMDA6NTQuODBd5pyJ6L+H5Lqb5oiQ5Yqf5oiR5Lus5LiA6LW35YiG5LqrClswMDo1OC4yNl3mnJ/lvoXkuIvkuKrnsr7lvannmoTlvIDlnLoKWzAxOjA2LjE3Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDE6MDkuNzNd6IO95YuH5pWi5YGa54Ot6KGA6Z2S5bm0ClswMToxMy41NF3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAxOjE3LjE2XeiDveWdmuaMgeW9k+WIneeahOS/oeW/tQpbMDE6MjEuMDFd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMToyNC41M13og73kuI3lv5jmgIDlm57lv4bngrnngrkKWzAxOjI4LjQ1Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDE6MzIuMDRd6IO96K6w6LW36Z2S5pil55qE5a656aKcClswMTo1My4wNl3kuIDovaznnLzlj4jluqbov4fkuobljYHlubQKWzAxOjU2LjQxXeaIkeS7rOS+neeEtua3i+a8k+mFo+eVhQpbMDI6MDAuNDRd5aSa5bCR5Lq66L+H5a6i6Iis5L2g5p2l5oiR5b6AClswMjowMy45MF3mgLvmnInkupvkurpUQeWunuWxnumavuW/mApbMDI6MDcuOTdd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMjoxMS41MF3og73li4fmlaLlgZrng63ooYDpnZLlubQKWzAyOjE1LjQzXei/mOacieWkmuWwkeS4quWNgeW5tApbMDI6MTguODVd6IO95Z2a5oyB5b2T5Yid55qE5L+h5b+1ClswMjoyMi45Ml3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAyOjI2LjMxXeiDveS4jeW/mOaAgOWbnuW/hueCueeCuQpbMDI6MzAuNDNd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMjozMy44OF3og73orrDotbfpnZLmmKXnmoTlrrnpopwKWzAyOjU4LjY5Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDM6MDIuMTJd6IO95YuH5pWi5YGa54Ot6KGA6Z2S5bm0ClswMzowNi4wN13ov5jmnInlpJrlsJHkuKrljYHlubQKWzAzOjA5LjU2XeiDveWdmuaMgeW9k+WIneeahOS/oeW/tQpbMDM6MTMuNjBd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMzoxNy4wNF3og73kuI3lv5jmgIDlm57lv4bngrnngrkKWzAzOjIwLjk4Xei/mOacieWkmuWwkeS4quWNgeW5tApbMDM6MjQuNTJd6IO96K6w6LW36Z2S5pil55qE5a656aKcClswMzoyOC42Nl3ov5jmnInlpJrlsJHkuKrljYHlubQKWzAzOjMyLjAzXeiDveS4jeW/mOaAgOWbnuW/hueCueeCuQpbMDM6MzYuMDRd6L+Y5pyJ5aSa5bCR5Liq5Y2B5bm0ClswMzozOS40OV3og73orrDotbfpnZLmmKXnmoTlrrnpopwKWzAzOjQ1LjgyXeWkmuWwkeW5tOaAu+W4jOacm+maj+W/g+aJgOWQkQpbMDM6NDguOTRd5LiN6LCI5bel5L2c5Lmf5LiN6LCI55CG5oOzClswMzo1Mi43Nl3ov5nmoLfnmoTml6XlrZDkuZ/kuI3nlKjlpKrplb8KWzAzOjU2LjQ1XeWPquaDs+WlveWlveeahOeXm+W/q+S4gOWcug=="
    },
    {
        id:"8",
        vkey:"",
        mid:"",
        name:"天下",
        singer:"张杰",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000034bzu226F71i.jpg?max_age=2592000",
        url:'http://58.49.111.17/amobile.music.tc.qq.com/C400001BwR1R1Tz2Lf.m4a?guid=5714054048&amp;vkey=6AEF4A97D253D5AC4B50AB758A5A2407F4D2BE49F5949F79E381163B0928986ACC7DD7ED8739B0D6CBDD7B2E84E871DFCAD03229937D122E&amp;uin=5285&amp;fromtag=66',
        lyric:""
    },
    {
        id:"9",
        vkey:"",
        mid:"",
        name:"海闊天空",
        singer:"BEYOND",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004CLlFV0mj6fC.jpg?max_age=2592000",
        url:'http://117.41.241.19/amobile.music.tc.qq.com/C400000XLtiO1pYlSu.m4a?guid=5714054048&amp;vkey=44E955DC0C883C9A91B732DD43E6161E398F196CB2DE597270FD52B3D0AE38BCBE6A8A0840DA9193C662503B2DE6044F4952D125A43B5253&amp;uin=5285&amp;fromtag=66%22%3E%3Csource%20src=%22http://117.41.241.19/amobile.music.tc.qq.com/C400000XLtiO1pYlSu.m4a?guid=5714054048&amp;vkey=44E955DC0C883C9A91B732DD43E6161E398F196CB2DE597270FD52B3D0AE38BCBE6A8A0840DA9193C662503B2DE6044F4952D125A43B5253&amp;uin=5285&amp;fromtag=66',
        lyric:"W3RpOua1t+mYlOWkqeepul0KW2FyOkJFWU9ORF0KW2FsOua1t+mYlOWkqeepul0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMDBd5rW36ZiU5aSp56m6ICjjgIrkuZ3kupQy54+t44CL572R57uc55S15b2x5o+S5puyKSAtIEJFWU9ORApbMDA6MDYuMjNd6K+N77ya6buE5a626am5ClswMDoxMi40Nl3mm7LvvJrpu4TlrrbpqbkKWzAwOjE4LjY5XeS7iuWkqeaIkeWvkuWknOmHjOeci+mbqumjmOi/hwpbMDA6MjUuMTVd5oCA552A5Ya35Y205LqG55qE5b+D56qd6aOY6L+c5pa5ClswMDoyOS45OV0KWzAwOjMxLjA5XemjjumbqOmHjOi/vei1tgpbMDA6MzQuMThd6Zu+6YeM5YiG5LiN5riF5b2x6LiqClswMDozNi43Ml0KWzAwOjM3LjMyXeWkqeepuua1t+mYlOS9oOS4juaIkQpbMDA6NDAuNDhd5Y+v5Lya5Y+YIOiwgeayoeWcqOWPmApbMDA6NDMuNjld5aSa5bCR5qyh6L+O552A5Ya355y85LiO5Ziy56yRClswMDo1MC4wNF3ku47msqHmnInmlL7lvIPov4flv4PkuK3nmoTnkIbmg7MKWzAwOjU0LjI1XQpbMDA6NTUuODld5LiA5Yi56YKj5oGN5oOaClswMDo1OS4wOV3oi6XmnInmiYDlpLHnmoTmhJ/op4kKWzAxOjAyLjE0XeS4jeefpeS4jeinieW3suWPmOa3oQpbMDE6MDUuMjdd5b+D6YeM54ixIOiwgeaYjueZveaIkQpbMDE6MDguMDhdClswMTowOC45M13ljp/osIXmiJHov5nkuIDnlJ/kuI3nvoHmlL7nurXniLHoh6rnlLEKWzAxOjE0LjIzXQpbMDE6MTUuOThd5Lmf5Lya5oCV5pyJ5LiA5aSp5Lya6LeM5YCSClswMToyMC44NF0KWzAxOjIyLjA5XeiDjOW8g+S6hueQhuaDs+iwgeS6uumDveWPr+S7pQpbMDE6MjcuMzBdClswMToyOC4zMV3lk6rkvJrmgJXmnInkuIDlpKnlj6rkvaDlhbHmiJEKWzAxOjMxLjkxXQpbMDE6NDMuMDJd5LuK5aSp5oiR5a+S5aSc6YeM55yL6Zuq6aOY6L+HClswMTo0OC45Nl0KWzAxOjQ5LjQ5XeaAgOedgOWGt+WNtOS6hueahOW/g+eqnemjmOi/nOaWuQpbMDE6NTQuMzhdClswMTo1NS4zMl3po47pm6jph4zov73otbYKWzAxOjU4LjQwXembvumHjOWIhuS4jea4heW9sei4qgpbMDI6MDAuOTNdClswMjowMS40Nl3lpKnnqbrmtbfpmJTkvaDkuI7miJEKWzAyOjA0LjcyXeWPr+S8muWPmCDosIHmsqHlnKjlj5gKWzAyOjA3LjYwXQpbMDI6MDguMjld5Y6f6LCF5oiR6L+Z5LiA55Sf5LiN576B5pS+57q154ix6Ieq55SxClswMjoxMy45NV0KWzAyOjE1LjIyXeS5n+S8muaAleacieS4gOWkqeS8mui3jOWAkgpbMDI6MjAuMjRdClswMjoyMS41NV3og4zlvIPkuobnkIbmg7PosIHkurrpg73lj6/ku6UKWzAyOjI2LjQ4XQpbMDI6MjcuNzRd5ZOq5Lya5oCV5pyJ5LiA5aSp5Y+q5L2g5YWx5oiRClswMjozMS41Nl0KWzAzOjA4LjgwXeS7jeeEtuiHqueUseiHquaIkQpbMDM6MTEuMjJdClswMzoxMi4yMV3msLjov5zpq5jllLHmiJHmrYwKWzAzOjE0Ljc0XQpbMDM6MTUuMzJd6LWw6YGN5Y2D6YeMClswMzoxOS4yOF0KWzAzOjIwLjEwXeWOn+iwheaIkei/meS4gOeUn+S4jee+geaUvue6teeIseiHqueUsQpbMDM6MjUuMjldClswMzoyNy4wMl3kuZ/kvJrmgJXmnInkuIDlpKnkvJrot4zlgJIKWzAzOjMxLjI3XQpbMDM6MzMuMDhd6IOM5byD5LqG55CG5oOz6LCB5Lq66YO95Y+v5LulClswMzozOC40Ml0KWzAzOjM5LjMxXeWTquS8muaAleacieS4gOWkqeWPquS9oOWFseaIkQpbMDM6NDQuMThdClswMzo0NS44MV3og4zlvIPkuobnkIbmg7PosIHkurrpg73lj6/ku6UKWzAzOjUwLjY4XQpbMDM6NTEuOTVd5ZOq5Lya5oCV5pyJ5LiA5aSp5Y+q5L2g5YWx5oiRClswMzo1Ni42N10KWzAzOjU3LjQ2XeWOn+iwheaIkei/meS4gOeUn+S4jee+geaUvue6teeIseiHqueUsQpbMDQ6MDIuODVdClswNDowNC4zMV3kuZ/kvJrmgJXmnInkuIDlpKnkvJrot4zlgJIKWzA0OjA4LjE2XQpbMDQ6MTAuMzNd6IOM5byD5LqG55CG5oOz6LCB5Lq66YO95Y+v5LulClswNDoxNS43OV0KWzA0OjE2LjkxXeWTquS8muaAleacieS4gOWkqeWPquS9oOWFseaIkQ=="
    },
    {
        id:"10",
        vkey:"",
        mid:"",
        name:"天下",
        singer:"张杰",
        album:"",
        durationP:"",
        image:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000034bzu226F71i.jpg?max_age=2592000",
        url:'http://58.49.111.17/amobile.music.tc.qq.com/C400001BwR1R1Tz2Lf.m4a?guid=5714054048&amp;vkey=6AEF4A97D253D5AC4B50AB758A5A2407F4D2BE49F5949F79E381163B0928986ACC7DD7ED8739B0D6CBDD7B2E84E871DFCAD03229937D122E&amp;uin=5285&amp;fromtag=66',
        lyric:""
    }
]
const states={
    singers:{},
    playStatus:false,
    songsList:defaultSong,
    myLove:defaultSong
    
}
export default states