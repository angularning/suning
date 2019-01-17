Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userPic:'',
    userRole:'',
    userRoles:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var loginUserInfo = wx.getStorageSync('loginUserInfo');
    console.log(loginUserInfo);
    this.setData({
      userName: loginUserInfo.userName,
      userPic: loginUserInfo.userPic,
      userRole: loginUserInfo.userRole
    });
    if (this.data.userRole==2){
      this.setData({
        userRoles:'店员'
      })
    } else if (this.data.userRole == 3) {
      this.setData({
        userRoles: '督导'
      })
    } else if (this.data.userRole == 4) {
      this.setData({
        userRoles: '大区经理'
      })
    } else if (this.data.userRole == 5) {
      this.setData({
        userRoles: '苏宁'
      })
    }
  },
  toMobile:function(){
   wx.navigateTo({
     url: '/pages/concatus/index',
   })
  },
  toQuo: function () {
    wx.navigateTo({
      url: '/pages/usualQuotation/index',
    })
  },
  toSubmitMes: function () {
    wx.navigateTo({
      url: '/pages/submitMes/index',
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