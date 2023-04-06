function resolveData(data) {
    let Data = []
    // data.forEach((val,index,key) => {
    //     console.log(val,index,key);
    // });
    // console.log(data);
    for (let key in data) {
        // console.log(value,data[value]);
        Data.push(key + "=", data[key] + "&")
    }
    // join 将数组转成字符串
    // post默认传参格式（key=value&） bookname=水浒传&author=施耐庵&publisher=上海图书出版社
    return Data.join('').slice(0, -1)
}
function ithema(data) {

    // console.log(data);
    // console.log(data.url + '?' + qs);
    // 创建
    let xhr = new XMLHttpRequest()

    if (data.method.toUpperCase() === 'GET') {
        let qs = resolveData(data.data)
        // console.log(data.url + '?' + qs);
        xhr.open(data.method, data.url + '?' + qs)
        //    调用
        xhr.send()
    } else if (data.method.toUpperCase() === 'POST') {
      
      
        xhr.open(data.method, data.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(resolveData(data.data))
    } else {
        alert('请求失败')
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 & xhr.status === 200) {

            let result = JSON.parse(xhr.responseText)
            data.success(result)
        }
    }
    // console.log(typeof data.url);
    // console.log(data);
}
// ithema()