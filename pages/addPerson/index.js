const app=getApp();
const u = require('../../utils/util.js');
const c = u.a(); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // user / addRegionManager
    this.setData({
      regionId: options.regionId
    })
  },
  mobileInput:function(e){
    this.setData({
      mobile: e.detail.value
    })
  },
  enterAdd:function(){
    let mobile = this.data.mobile;
    if (mobile == '') {
      wx.showToast({
        title: '号码不能为空',
        icon: 'none',
        duration: 2000
      });
      return
    } 
     if (mobile.trim().length != 11 || !/^1[3|4|5|6|7|8|9]\d{9}$/.test(mobile)) {
      wx.showToast({
        title: '手机号格式不正确',
        icon: 'none',
        duration: 2000
      });
      return
    }
    wx.request({
      url: c.url + 'user/addRegionManager',
      method: 'post',
      data: {
        regionId: Number(this.data.regionId),
        mobile: Number(this.data.mobile)
      },
      header:  {
        'content-type': 'application/json'
        , 'Cookie': 'ticket=' + wx.getStorageSync('ticket')
      },
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
          wx.switchTab({
            url: '/pages/indexOne/index',
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon:'none'
          })
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})