Page({

  /**
   * 页面的初始数据
   */
  data: {
    curentPlaceg: 116.28846,
    curentPlacet: 40.073756,
    item:{
      title:'标题很帅',
      contents:'内容很酷'
    }
  },
  getLocationPlace(){
    var that=this;
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        console.log(res)
        this.setData({
          curentPlaceg: longitude,
          curentPlacet: latitude
        })
        // that.data.
      }
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  } ,
  useCamer(){
    wx.scanCode({
      success: (res) => {
        console.log('相机获取的东西：'+res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.startPullDownRefresh({
      success:function(){
        wx.showModal({
          title: 'startPullDownRefresh',
          content: 'startPullDownRefresh',
        })
      }
    })
    // this.getLocationPlace();
    wx.onCompassChange(function (res) {
      console.log(res.direction)
    });
    wx.getSetting({
      success:function(res){
        console.log(res)
      },
      complete:function(res){
        console.log(res)
      }
    });
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
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
      wx.showModal({
        title: '下拉处理',
        content: '下拉处理',
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showModal({
      title: '上拉触底事件的处理函数',
      content: '上拉触底事件的处理函数',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
      console.log(res)
  }
})