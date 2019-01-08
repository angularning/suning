//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {},
    isShow: true
  },
 
  onLoad: function() {
    console.log('onLoad');
    wx.checkSession({
      success: function() {
        console.log('存在登陆态');
        wx.navigateBack({
          url: '/pages/indexOne/index',
        });
      },
      fail: function() {
        console.log('不存在登陆态');
        // onLogin()
      }
    })
    var that = this
    // wx.setNavigationBarTitle({
    //   title: wx.getStorageSync('mallName')
    // });
    let userInfo = wx.getStorageSync('userInfo');
    console.log('userInfo:' + userInfo)
    if (userInfo == '' || userInfo == null) {
      this.setData({
        isShow: true,
      });
    } else {
      this.setData({
        isShow: false,
      });
    }
  },
  onShow: function() {
   
  },

  onGotUserInfo: function(e) {
    console.log(e);
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'https://jinrongt.jihustore.com/suningApplet/user/login',
            data: {
              code: res.code
            },
            success(e) {
              let d = e.data;
              console.log(e)
              if (d.code == 1000000){
                wx.setStorageSync('ticket', d.data.ticket)
                if(d.data.data==''){
                  wx.navigateTo({
                    url: '/pages/loginMobile/index',
                  });
                }else{
                  wx.navigateTo({
                    url: '/pages/indexOne/index',
                  })
                }
              }
            },
            fail(e) {
              console.log(e);

            },
            complete(e) {}
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // var that=this;
    // console.log(e);

    // let userInfo = wx.getStorageSync('userInfo');
    // console.log(userInfo)
    // if (userInfo == '' || userInfo==null){
    //   console.log('拒绝授权');
    //   that.setData({
    //     isShow: true,
    //   });
    // }else{
    //   that.setData({
    //     isShow: false,
    //   });
    //   setTimeout(function () {
    //     that.goToIndex();
    //   }, 1000);

    // }
  },
  onReady: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        remind: ''
      });
    }, 1000);

  }
});