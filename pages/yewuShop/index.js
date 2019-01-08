Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    title:'大区',
    fuzeName:'校长',
    shopNum:78,
    placeBalace: [
      {
        "id":1,
        "name": "襄阳手机专卖店",
        "wealth": 1000,
        "shopper": 20
      },
      {
        "id": 2,
        "name": "襄阳手机专卖店1",
        "wealth": 18800,
        "shopper": 20
      },
      {
        "id": 3,
        "name": "襄阳手机专卖店2",
        "wealth": 10000,
        "shopper": 20
      },
      {
        "id": 4,
        "name": "襄阳手机专卖店3",
        "wealth": 1000,
        "shopper": 280
      }
    ],
    balanceList: [{
      "s": 0,
      "name": "百度拉新",
      "money": 10000,
      "url": "http://www.yqbing.com/page/mobilePage/images/standard/iconBaidulaxin.png"
    },
      {
        "s": 0,
        "name": "百度拉新1",
        "money": 10000,
        "url": "http://www.yqbing.com/page/mobilePage/images/standard/iconBaidulaxin.png"
      },
      {
        "s": 0,
        "name": "百度拉新1",
        "money": 10000,
        "url": "http://www.yqbing.com/page/mobilePage/images/standard/iconBaidulaxin.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
  },
  toChangeDudao:function(e){
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '/pages/yewuShop/index?data',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.dialog = this.selectComponent("#dialog");
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