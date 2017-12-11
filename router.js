/**
 * 页面路由采用正则匹配模式
 * @match [必需] 匹配url-path的正则
 * @params [可选] 为正则中的捕获组命名，可通过ctx.get(name)获取匹配到的值
 * @controller [必需] 为当前path指定controller
 */
module.exports = [{
    match: /^\/about(?:\/(\w+))?$/i,
    params: ['id'],
    controller: 'home.about'
}];