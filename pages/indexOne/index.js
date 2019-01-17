var utils = require('../../utils/util.js')
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userMessageList: [],
    businessModelList: [],
    cashableWealth: 0,
    monthWealth: 0,
    storeManager: '',
    clerkNumber: '',
    msgList: [],
    placeBalace: [{
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
    dianyuan3List: [
      // {
      //   "name": "网二",
      //   "wealth": 1000,
      // },
      // {
      //   "name": "网易",
      //   "wealth": 18800,
      // },
      // {
      //   "name": "小李",
      //   "wealth": 10000,
      // },
      // {
      //   "name": "消费",
      //   "wealth": 1000,
      // }
    ],
    role: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    var ticket = wx.getStorageSync('ticket');
    const a = 15811239162;
    console.log(a.toLocaleString())
    wx.request({
      url: app.getUseData.url + 'home',
      method: 'post',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
        , 'Cookie': 'ticket=' + ticket
      },
      success: (res) => {
        console.log(res);
        let d = res.data.data;
        let l = res.data;
        if (res.data.code == '1000000') {
          wx.setStorageSync('storeId', d.userInfoModel.storeId);
          this.setData({
            role: d.userInfoModel.role
          })
          // 根据不同角色显示不同模块
          // 公共消息模块
          d.userMessageList.forEach(function(item) {
            item.messageTime = utils.sub(item.messageTime)
            item.messageContent = utils.subWord(item.messageContent)
          });
          this.setData({
            userMessageList: d.userMessageList,
            businessModelList: d.businessModelList
          });

          // 当角色为3 店长时候
          if (d.userInfoModel.role == 3) {
            that.setData({
              monthWealth: d.userInfoModel.monthWealth,
              cashableWealth: d.userInfoModel.cashableWealth,
              userMessageList: d.userMessageList
            });
            //店员列表
            this.setData({
              dianyuan3List: d.clerkList,
              storeManager: d.userInfoModel.storeManager,
              clerkNumber: d.userInfoModel.clerkNumber
            });
          }
          if (d.userInfoModel.role == 5) {
            // 当为苏宁总部
            this.setData({
              storeNumber: d.userInfoModel.storeNumber,
              regionNumber: d.userInfoModel.regionNumber
            })
          }
          if (d.userInfoModel.role == 4) {
            this.setData({
              regionManager4: d.userInfoModel.regionManager,
              storeNumber4: d.userInfoModel.storeNumber,
              storeInfoList: d.storeInfoList
            })
          }
          if (d.userInfoModel.role == 2) {
            this.setData({
              storeManager2: d.userInfoModel.storeManager,
              clerkNumber2: d.userInfoModel.clerkNumber,
            })
          }
          
        }else{
          wx.showToast({
            title: res.data.msg
          })
        }
      }
    })
  },
  toSendMessage: function () {
    wx.navigateTo({
      url: '/pages/messageList/index',
    })
  },
  toSendTong: function () {
    wx.navigateTo({
      url: '/pages/sendMessage/index',
    })
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
  toBigPlace: function() {
    wx.navigateTo({
      url: '/pages/bigPlace/index',
    })
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
    if (num == 0) {
      wx.navigateTo({
        url: '/pages/baiduLaxin/index'
      })
    }else if(num==1){
      wx.navigateTo({
        url: '/pages/haokanLaxin/index'
      })
    }else{
      wx.navigateTo({
        url: '/pages/yingyongbaoLaxin/index'
      })
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
  toSeeMoreShopper: function () {
    wx.navigateTo({
      url: '/pages/addShopperList/index',
    })
  },
  toSeeMore4Shop: function () {
    var loginUserInfo = wx.getStorageSync('loginUserInfo');
    var storeId = loginUserInfo.storeId;
    wx.navigateTo({
      url: '/pages/yewuShopList/index?id=' + storeId,
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