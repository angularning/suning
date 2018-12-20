Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    joinType:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getPhoneNumber(e){
      console.log(e)
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
  checkShopCode:function(){
    let joinType = this.data.joinType;
    wx.navigateTo({
      url: '/pages/enterJoin/index?type=' + joinType
    })
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
    if (e.detail.current==1){
      wx.scanCode({
        success: (res) => {
          console.log(res.result);
          wx.navigateBack({
            url: '/pages/enterJoin/index?type=' + joinType
          })
        }
      })
    }
  },
  //点击切换
  clickTab: function (e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      console.log(e.target.dataset.current)
      if (e.target.dataset.current==1){
        wx.scanCode({
          success: (res) => {
            console.log(res.result);
            wx.navigateBack({
              url:'/pages/enterJoin/index?type='+joinType
            })
          }
        })
      }
      // console.log(e.target.dataset.current)
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  stopTouchMove: function () {
    return false;
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