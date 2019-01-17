const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    title: '大区',
    fuzeName: '校长',
    storeName: '',
    storeAddress: '',
    wealthEarn: '',//本月
    wealthYes: '',//上月
    totalWealth: '', //总计
    shopNum: 78,
    userId: '',
    storeId: '',
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
    balanceList: [
      //   {
      //   "s": 0,
      //   "name": "百度拉新",
      //   "money": 10000,
      //   "url": "http://www.yqbing.com/page/mobilePage/images/standard/iconBaidulaxin.png"
      // },
      //   {
      //     "s": 0,
      //     "name": "百度拉新1",
      //     "money": 10000,
      //     "url": "http://www.yqbing.com/page/mobilePage/images/standard/iconBaidulaxin.png"
      //   },
      //   {
      //     "s": 0,
      //     "name": "百度拉新1",
      //     "money": 10000,
      //     "url": "http://www.yqbing.com/page/mobilePage/images/standard/iconBaidulaxin.png"
      //   }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var loginUserInfo = wx.getStorageSync('loginUserInfo');
    var userId = loginUserInfo.userId;
    this.setData({
      userId: userId
    })
    var ticket = wx.getStorageSync('ticket');
    let storeId = wx.getStorageSync('storeId');
    wx.request({
      url: app.getUseData.url + 'wealth/wealthDetail', //
      method: 'post',
      data: {
        // storeId: storeId,
        // pageIndex: 0,
        // pageSize: 100
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          this.setData({
            // storeName: res.data.data.storeName,
            // storeAddress: res.data.data.storeAddress,
            totalWealth: res.data.data.totalWealth,
            wealthEarn: res.data.data.wealthEarn,
            wealthYes: res.data.data.wealthYes
            // dianyuan3List: res.data.data.content
          })
        }

      }
    })

    // 查询今日
    this.checkBalance(0);

  },
  getTime: function (aa) {
    var date1 = new Date(),
      time1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();//time1表示当前时间
    var date2 = new Date(date1);
    date2.setDate(date1.getDate() + aa);
    var time2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
    return time2
  },
  checkBalance: function (e) {
    console.log(e);
    var type;
    if (e == 0) {
      type = 0
    } else {
      type = e.currentTarget.dataset.current
    }
    var ticket = wx.getStorageSync('ticket');
    let userId = this.data.userId;
    var startTime, endTime;
    if (type == 0) {
      startTime = this.getTime(0),
        endTime = this.getTime(0)
    } else if (type == 1) {
      startTime = this.getTime(-1),
        endTime = this.getTime(-1)
    } else if (type == 2) {
      startTime = this.getTime(-7),
        endTime = this.getTime(0)
    } else if (type == 3) {
      startTime = this.getTime(-30),
        endTime = this.getTime(0)
    }
    wx.request({
      url: app.getUseData.url + 'statistics/homeStatistics',
      method: 'post',
      data: {
        userId: userId,
        startTime: startTime,
        endTime: endTime
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          if (type == 0) {
            this.setData({
              balanceList0: res.data.data.regionDetailStatisticsModelList,
              estimatedRevenue0: res.data.data.estimatedRevenue
            })
          }
          if (type == 1) {
            this.setData({
              balanceList1: res.data.data.regionDetailStatisticsModelList,
              estimatedRevenue1: res.data.data.estimatedRevenue
            })
          }
          if (type == 2) {
            this.setData({
              balanceList2: res.data.data.regionDetailStatisticsModelList,
              estimatedRevenue2: res.data.data.estimatedRevenue
            })
          }
          if (type == 3) {
            this.setData({
              balanceList3: res.data.data.regionDetailStatisticsModelList,
              estimatedRevenue3: res.data.data.estimatedRevenue
            })
          }
        }

      }
    })
  },
  toSeeMonthData: function () {
    wx.navigateTo({
      url: '/pages/shopperMonthData/index?userId=' + this.data.userId,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.dialog = this.selectComponent("#dialog");
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
    console.log(e);
    this.checkBalance(e);
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