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
        "name": "襄阳手机专卖店",
        "wealth": 1000,
        "shopper": 20
      },
      {
        "name": "襄阳手机专卖店1",
        "wealth": 18800,
        "shopper": 20
      },
      {
        "name": "襄阳手机专卖店2",
        "wealth": 10000,
        "shopper": 20
      },
      {
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
    if (options==''||options==null){
      wx.setNavigationBarTitle({
        title: '大区'
      })
    }else{
      wx.setNavigationBarTitle({
        title: options.name
      })
    }
   
  },
  getPhoneNumber(e) {
    console.log(e)
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
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
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