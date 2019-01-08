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

  onLoad: function () {
    console.log('onLoad');
    wx.checkSession({
      success: function () {
        console.log('存在登陆态');
        wx.navigateBack({
          url: '/pages/indexOne/index',
        });
      },
      fail: function () {
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
  onShow: function () {
    // let that = this
    // let userInfo = wx.getStorageSync('userInfo')
    // if (!userInfo) {
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         isShow: false
    //       });
    //       that.goToIndex();
    //     }
    //   })
    // } else {
    //   that.setData({
    //     userInfo: userInfo,
    //     isShow: true
    //   });
    // }
  },

  onGotUserInfo: function (e) {
    console.log(e);
    // if (e.data.msg == '成功') {
    //   wx.navigateTo({
    //     url: '/pages/loginMobile/index'
    //   })
    // }
    // wx.navigateTo({
    //   url: '/pages/loginMobile/index'
    // })
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
              if (d.code == 1000000) {
                if (d.data == "" || d.data == null) {
                  wx.navigateTo({
                    url: '/pages/loginMobile/index'
                  })
                } else {
                  if (d.data == 0) {
                    //有身份
                    // wx.navigateTo({
                    //   url: '/pages/index/index'
                    // });
                  } else if (d.data == 1) {
                    //无身份
                    if (d.data == 11) { //未申请认证
                      wx.navigateTo({
                        url: '/pages/authentication/index'
                      });
                    } else
                      if (d.data == 12) { //申请认证中
                        wx.navigateTo({
                          url: '/pages/authentication/index'
                        });
                      } else if (d.data == 13) { //认证失败

                      } else {

                      }
                  } else if (d.data == "home") {
                    //已登录已认证去首页
                    wx.navigateTo({
                      url: '/pages/index/index'
                    });
                  }

                }
              }
            },
            fail(e) {
              console.log(e);

            },
            complete(e) { }
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
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);

  }
});