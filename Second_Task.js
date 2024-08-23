function getUrlParameterValue(url, parameter) {
    let urlObj = new URL(url);

    return urlObj.searchParams.get(parameter);
}

var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url, "utm_medium")); 
console.log(getUrlParameterValue(url, "utm_campaign")); 
