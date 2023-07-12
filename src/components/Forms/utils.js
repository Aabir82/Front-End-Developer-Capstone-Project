function dateFromString(str) {
    const miliseconds = Date.parse(str);
    const dateFormat = new Date(miliseconds);
    return dateFormat;
}

function dateToString(date) {
    
const day =date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
const month =
  date.getMonth() + 1 < 10
    ? "0" + (date.getMonth() + 1)
    : date.getMonth() + 1;
const year = date.getFullYear();
    const dateString = year + "-" + month + "-" + day;
    
    return dateString;
}


export { dateFromString, dateToString };