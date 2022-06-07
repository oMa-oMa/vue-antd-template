/**
 * @description: 截取url
 * @author: MAO
 * @date: 2022-06-07 10:36:57
 * @version: V1.0.0
**/
export function splitUrl(url) {
    let jsonData = {};
    let arr = url.split('?')[1].split('&');

    for(let item of arr) {
        const [key, value] = item.split('=');
        jsonData[key] = value;
    }

    return jsonData;
}