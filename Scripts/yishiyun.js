// 解析服务器返回的 JSON
let obj = JSON.parse($response.body);

obj.data = {};

// 把修改后的内容返回给 App
$done({ body: JSON.stringify(obj) });
