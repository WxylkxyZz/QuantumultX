if ($response.body) {

  let obj = JSON.parse($response.body);

  if (obj.data && Array.isArray(obj.data.list)) {
    obj.data.list = obj.data.list.filter(item => item.type !== 1);
  }

  $done({ body: JSON.stringify(obj) });

} else {
  $done({});
}


if ($response.body) {

  let obj = JSON.parse($response.body);

  if (obj.data) {
    for (let key in obj.data) {

      if (obj.data[key].list && Array.isArray(obj.data[key].list)) {
        obj.data[key].list =
          obj.data[key].list.filter(item => item.type !== 1);
      }

    }
  }

  $done({ body: JSON.stringify(obj) });

} else {
  $done({});
}
