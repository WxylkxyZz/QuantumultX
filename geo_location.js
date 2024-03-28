async function geoInfo() {
  const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=08',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'sec-ch-ua': '"Not A Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36',
  };

  try {
    const response = await fetch('https://api.ip.sb/geoip', { headers });
    const data = await response.json();

    const IP_INFO_PARAMS = [data.ip, data.isp, data.city, data.country, data.country_code, data.continent_code];

    console.log('-' * 30);
    console.log(' IP.SB 查询结果');
    console.log(`IP: ${IP_INFO_PARAMS[0]}`);
    console.log(`isp: ${IP_INFO_PARAMS[1]}`);
    console.log(`city: ${IP_INFO_PARAMS[2]}`);
    console.log(`country: ${IP_INFO_PARAMS[3]}`);
    console.log(`country_code: ${IP_INFO_PARAMS[4]}`);
    console.log(`continent_code: ${IP_INFO_PARAMS[5]}`);
    console.log('-' * 30);
  } catch (error) {
    console.log('-' * 30);
    console.error('结果查询超时');
    console.log('-' * 30);
  }
}

geoInfo();
