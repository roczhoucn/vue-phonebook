//数据内容为Base64编码后内容
var data = "W3siaWQiOiIxIiwibmFtZSI6Ium7hOaZk+aYjiIsInByb3ZpbmNlIjoi5YyX5Lqs5biCIiwiY2l0eSI6IuWMl+S6rOW4giIsImRpc3RyaWN0Ijoi5rW35reA5Yy6IiwiY29tcGFueSI6IuWMl+S6rOWkp+WtpiIsInBvc2l0aW9uIjoi5Y2a5aOrIiwidGVsIjoiMTMwMjIyMzMzMzMiLCJtYWlsIjoiMTMwMjIyMzMzMzNAMTYzLmNvbSJ9LAp7ImlkIjoiMiIsIm5hbWUiOiLpu4Tno4oiLCJwcm92aW5jZSI6Iuaxn+iLj+ecgSIsImNpdHkiOiLoi4/lt57luIIiLCJkaXN0cmljdCI6IumrmOaWsOWMuiIsImNvbXBhbnkiOiLoi4/lt57luILlt6jml6DpnLjlhazlj7giLCJwb3NpdGlvbiI6IuiBjOWRmCIsInRlbCI6IjEzMDMyMjMzODk1IiwibWFpbCI6IjEzMDMyMjMzODk1QDI2My5jb20ifSwKeyJpZCI6IjMiLCJuYW1lIjoi6Z+p5a+SIiwicHJvdmluY2UiOiLkuIrmtbfluIIiLCJjaXR5Ijoi5LiK5rW35biCIiwiZGlzdHJpY3QiOiLpl7XooYzljLoiLCJjb21wYW55Ijoi5LiK5rW35rG96L2m56CU56m25Lit5b+DIiwicG9zaXRpb24iOiLmnLrmorDorr7orqEiLCJ0ZWwiOiIxMzA0MjIzNDQ1NyIsIm1haWwiOiIxMzA0MjIzNDQ1N0AzNjMuY29tIn0sCnsiaWQiOiI0IiwibmFtZSI6IumfqeW6miIsInByb3ZpbmNlIjoi5YyX5Lqs5biCIiwiY2l0eSI6IuWMl+S6rOW4giIsImRpc3RyaWN0Ijoi5rW35reA5Yy6IiwiY29tcGFueSI6IuWMl+S6rOW4guaWsOadkOaWmeeglOeptuS4reW/gyIsInBvc2l0aW9uIjoi5p2Q5paZ5bel56iL5biIIiwidGVsIjoiMTMwNTIyMzUwMTkiLCJtYWlsIjoiMTMwNTIyMzUwMTlANDYzLmNvbSJ9LAp7ImlkIjoiNSIsIm5hbWUiOiLpn6nno4oiLCJwcm92aW5jZSI6IuS4iua1t+W4giIsImNpdHkiOiLkuIrmtbfluIIiLCJkaXN0cmljdCI6Iuadvuaxn+WMuiIsImNvbXBhbnkiOiLkuIrmtbfluILkuI3liqDnj63np5HmioDmnInpmZDlhazlj7giLCJwb3NpdGlvbiI6IueggeWGnCIsInRlbCI6IjEzMDYyMjM1NTgxIiwibWFpbCI6IjEzMDYyMjM1NTgxQDU2My5jb20ifSwKeyJpZCI6IjYiLCJuYW1lIjoi5rW35bKpIiwicHJvdmluY2UiOiLlsbHkuJznnIEiLCJjaXR5Ijoi5r2N5Z2K5biCIiwiZGlzdHJpY3QiOiLlpY7mlofljLoiLCJjb21wYW55Ijoi5r2N5Z2K5biC5ZWG5Yqh5bGAIiwicG9zaXRpb24iOiLnp5HlkZgiLCJ0ZWwiOiIxMzA3MjIzNjE0MyIsIm1haWwiOiIxMzA3MjIzNjE0M0A2NjMuY29tIn0sCnsiaWQiOiI3IiwibmFtZSI6Iua1t+a4hSIsInByb3ZpbmNlIjoi5LiK5rW35biCIiwiY2l0eSI6IuS4iua1t+W4giIsImRpc3RyaWN0Ijoi5b6Q5rGH5Yy6IiwiY29tcGFueSI6IuafkOafkOafkOS/oeaBr+aKgOacr+iCoeS7veaciemZkOWFrOWPuCIsInBvc2l0aW9uIjoi5ri45oiP6K6+6K6hIiwidGVsIjoiMTMwODIyMzY3MDUiLCJtYWlsIjoiMTMwODIyMzY3MDVANzYzLmNvbSJ9LAp7ImlkIjoiOCIsIm5hbWUiOiLmtbfpuKPlqIEiLCJwcm92aW5jZSI6IuWxseS4nOecgSIsImNpdHkiOiLmtY7ljZfluIIiLCJkaXN0cmljdCI6IuWOhuWfjuWMuiIsImNvbXBhbnkiOiLmtarmva7pm4blm6IiLCJwb3NpdGlvbiI6Iui0ouWKoeWJr+e7j+eQhiIsInRlbCI6IjEzMDkyMjM3MjY3IiwibWFpbCI6IjEzMDkyMjM3MjY3QDg2My5jb20ifSwKeyJpZCI6IjkiLCJuYW1lIjoi6IOh5Y+vIiwicHJvdmluY2UiOiLlsbHkuJznnIEiLCJjaXR5Ijoi6Z2S5bKb5biCIiwiZGlzdHJpY3QiOiLluILljJfljLoiLCJjb21wYW55Ijoi6Z2S5bKb5biCWFhYWOS4k+WNluW6lyIsInBvc2l0aW9uIjoi5bqX6ZW/IiwidGVsIjoiMTMxMDIyMzc4MjkiLCJtYWlsIjoiMTMxMDIyMzc4MjlAOTYzLmNvbSJ9LAp7ImlkIjoiMTAiLCJuYW1lIjoi6IOh5YabIiwicHJvdmluY2UiOiLmtZnmsZ/nnIEiLCJjaXR5Ijoi5p2t5bee5biCIiwiZGlzdHJpY3QiOiLmsZ/lubLljLoiLCJjb21wYW55Ijoi5p2t5beeWFhYWOWkp+WtpiIsInBvc2l0aW9uIjoi5Y2a5aOr55SfIiwidGVsIjoiMTMxMTIyMzgzOTEiLCJtYWlsIjoiMTMxMTIyMzgzOTFAMTA2My5jb20ifSwKeyJpZCI6IjExIiwibmFtZSI6IuiDoea1t+aziSIsInByb3ZpbmNlIjoi5bGx5Lic55yBIiwiY2l0eSI6Iua9jeWdiuW4giIsImRpc3RyaWN0Ijoi5aWO5paH5Yy6IiwiY29tcGFueSI6Iua9jeWdiuW4glhYWFjlrqDnianljLvpmaIiLCJwb3NpdGlvbiI6IuWuoOeJqeWMu+eUnyIsInRlbCI6IjEzMTIyMjM4OTUzIiwibWFpbCI6IjEzMTIyMjM4OTUzQDExNjMuY29tIn0sCnsiaWQiOiIxMiIsIm5hbWUiOiLog6HmrYwgIiwicHJvdmluY2UiOiLlsbHkuJznnIEiLCJjaXR5Ijoi5r2N5Z2K5biCIiwiZGlzdHJpY3QiOiLlpY7mlofljLoiLCJjb21wYW55Ijoi5ZOl5YS/5aOw5a2m6IKh5Lu95pyJ6ZmQ5YWs5Y+4IiwicG9zaXRpb24iOiLliqnnkIblt6XnqIvluIgiLCJ0ZWwiOiIxMzEzMjIzOTUxNSIsIm1haWwiOiIxMzEzMjIzOTUxNUAxMjYzLmNvbSJ9LAp7ImlkIjoiMTMiLCJuYW1lIjoi6buE5a2Q6Z+sIiwicHJvdmluY2UiOiLljJfkuqzluIIiLCJjaXR5Ijoi5YyX5Lqs5biCIiwiZGlzdHJpY3QiOiLmnJ3pmLPljLoiLCJjb21wYW55Ijoi5YyX5Lqs5biC5Lit5ZKM5Y2O56eR5oqA5pyJ6ZmQ5YWs5Y+4IiwicG9zaXRpb24iOiLliqnnkIblt6XnqIvluIgiLCJ0ZWwiOiIxMzE0MjI0MDA3NyIsIm1haWwiOiIxMzE0MjI0MDA3N0AxMzYzLmNvbSJ9LAp7ImlkIjoiMTQiLCJuYW1lIjoi6bm/5pmXIiwicHJvdmluY2UiOiLlsbHkuJznnIEiLCJjaXR5Ijoi5r2N5Z2K5biCIiwiZGlzdHJpY3QiOiLlr5Lkuq3ljLoiLCJjb21wYW55Ijoi5Lit5Zu95bel5ZWG6ZO26KGMeHh45pSv6KGM6JCl5Lia6YOoIiwicG9zaXRpb24iOiLlpKfloILkuLvku7siLCJ0ZWwiOiIxMzE1MjI0MDYzOSIsIm1haWwiOiIxMzE1MjI0MDYzOUAxNDYzLmNvbSJ9LAp7ImlkIjoiMTUiLCJuYW1lIjoi5ZC05Lqm5YehIiwicHJvdmluY2UiOiLlsbHkuJznnIEiLCJjaXR5Ijoi6Z2S5bKb5biCIiwiZGlzdHJpY3QiOiLltILlsbHljLoiLCJjb21wYW55Ijoi5L+h5bCU6ZuG5ZuiIiwicG9zaXRpb24iOiLova/ku7blt6XnqIvluIgiLCJ0ZWwiOiIxMzE2MjI0MTIwMSIsIm1haWwiOiIxMzE2MjI0MTIwMUAxNTYzLmNvbSJ9XQ==";
export function getAlldata(){
    return Base64.decode(data);
}
export function validataUser(name,tel){
    var original = JSON.parse(Base64.decode(data));
    for(let item of original){
        if(item.name == name && item.tel == tel){
            return true;
        }
    }
    return false;
}
export function getBookPageList(pageSize,PageNo){
    var original = JSON.parse(Base64.decode(data));
    var retData = [];
    var startIndex = (PageNo-1)*pageSize;
    for(let i = startIndex; i < startIndex+pageSize && i<original.length;i++){
            retData.push(original[i]);
    }
    return retData;
}

let Base64 = {
    encode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    },
    decode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
};