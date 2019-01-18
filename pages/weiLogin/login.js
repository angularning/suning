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
        wx.navigateTo({
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
              console.log('登陆成功的')
              console.log(e);
              let d = e.data;
              if (d.code == 1000000){
                wx.setStorageSync('ticket', d.data.ticket);
                console.log(d.data.ticket);
                wx.setStorageSync('loginUserInfo', d.data.data);
                console.log(d.data.data);
                if (d.data.data == "" || d.data.data==null){
                  wx.navigateTo({
                    url: '/pages/loginMobile/index',
                  });
                }else{
                  wx.switchTab({
                    url: '/pages/indexOne/index',
                  })
                }
              }else{
                wx.showToast({
                  title: '' + d.msg,
                  icon: 'none',
                })
              }
            },
            fail(e) {
              console.log('登陆失败')
              console.log(e);

            },
            complete(e) {
              console.log('登陆完成，不管成功失败');
            }
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