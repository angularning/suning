//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {},
    isShow:true
  },
  goToIndex: function() {
    console.log('11111')
    wx.navigateTo({
      url: '/pages/index/index',
    });
  },
  onLoad: function() {
    console.log('onLoad');
    wx.checkSession({
      success: function () {
        console.log('存在登陆态');
        this.goToIndex();
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
    console.log('userInfo:'+userInfo)
    if (userInfo == '' || userInfo == null) {
      this.setData({
        isShow: true,
      });
    }else{
      this.setData({
        isShow: false,
      });
    }
  },
  onShow: function() {
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
  
  onGotUserInfo:function(e){
    console.log(e);

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