// var content= `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: bold">` + response.body + `</p>`;

  var url = "https://api.ip.sb/geoip"
  var opts = {
      policy: $environment.params
  };
  var myRequest = {
      url: url,
      opts: opts,
      timeout: 4000
  };
 
  var message = ""
  const paras = ["ip","isp","country_code","city"]
  const paran = ["IP","ISP","地区","城市"]
  $task.fetch(myRequest).then(response => {
    message = response? response.body : ""
    $done({$environment.params});
}, reason => {
    // reason.error
    $done({$environment.params});
});
