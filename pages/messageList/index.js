const app=getApp();
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
   this.getMesList();
    this.getMesList1();
  },
  getMesList:function(){
    wx.request({
      url: app.getUseData.url + 'message/firstMessage ', //
      method: 'post',
      data: {
        type: 1
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000){
          this.setData({
            oneMes: res.data.data.messageText
          })
        }
      }
    })
  },

  getMesList1: function () {
    wx.request({
      url: app.getUseData.url + 'message/firstMessage ', //
      method: 'post',
      data: {
        type: 2
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          this.setData({
            twoMes: res.data.data.messageText
          })
        }
      }
    })
  },
  toSystme:function(){
    wx.navigateTo({
      url: '/pages/systemMes/index',
    });
  },

  toUsually: function () {
    wx.navigateTo({
      url: '/pages/usuallyMes/index',
    });
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