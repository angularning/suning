var hotapp = require('./utils/hotapp');
var ticket = wx.getStorageSync('ticket');
var app = getApp();
App({
    getUseData: {
      url: 'https://jinrongt.jihustore.com/suningApplet/',
      headerConfig: {
        'content-type': 'application/json' // 默认值
        , 'Cookie': 'ticket=' + ticket
      },
        runDegs: 0
    }
});