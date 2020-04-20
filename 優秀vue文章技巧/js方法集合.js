function replaceMoney(str){  //價格千位符展示  1234  =>  1,234
    return str.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,'$1,')
}
