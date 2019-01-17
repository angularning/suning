const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    isShow1: true,
    isShow2: false,
    isShow3: false,
    baiduEr: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // baiduNewComers /
    wx.request({
      url: app.getUseData.url + 'tencent/applyTencentBusinessQrcode',
      method: 'post',
      data: {
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          this.setData({
            downloadUrl: res.data.data.downloadUrl,
            tencentlinkUrl: res.data.data.tencentlinkUrl
          })
        }
      }
    })
  },
  toRequestEr: function () {
    wx.request({
      url: app.getUseData.url + 'baiduNewComers/applyBaiduNewComersQualification',
      method: 'post',
      data: {
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          if (res.data.data.status == 1) {
            this.setData({
              isShow1: false,
              isShow2: false,
              isShow3: true
            })
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
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
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      console.log(e.target.dataset.current)
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  showDialog: function () {
    this.dialog.showDialog();
  },
  _confirmEvent: function () {
    this.dialog.hideDialog();
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