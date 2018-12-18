Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMessageList:[],
    businessModelList:[],
    cashableWealth:0,
    monthWealth:0,
    msgList:[]
    // https://jinrongt.jihustore.com/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {



    let that=this;
    wx.request({
      url: 'https://jinrongt.jihustore.com/suningApplet/home', //
      method:'post', 
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res);
        let d = res.data.data;
        if (res.data.code == '1000000') {
          that.setData({
            monthWealth: d.userInfoModel.monthWealth,
            cashableWealth: d.userInfoModel.cashableWealth,
            businessModelList: d.businessModelList,
            userMessageList: d.userMessageList
          })
        }
      }
    })
  },
  
  getPhoneNumber(e) {
    console.log(e)
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  // 跳转相应的业务
  toYeDetail(e) {
    console.log(e.currentTarget.dataset.num);
    let num = e.currentTarget.dataset.num;
    wx.navigateTo({
      url: '../userInfo/userInfo'
    })
    if (num == 0) {
     
    }

  },
  toMyYuan: function() {
    wx.navigateTo({
      url: '../personalManage/index?id=1&type=1', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
      success: function() {
        console.log('跳转success');
      }, //成功后的回调；
      fail: function() {

      }, //失败后的回调；
      complete: function() {
        console.log('跳转complete');

      } //结束后的回调(成功，失败都会执行)
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})