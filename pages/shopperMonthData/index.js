const u = require('../../utils/util.js');
const c = u.a(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    currentTab: 0,
    showListTrue: true,
    showListFalse:false,
    up: '/image/historyIconUp.png',
    down:'/image/historyIconDown.png',
    placeBalace:[],
    noData:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    console.log(options)
    var ticket = wx.getStorageSync('ticket');
    let storeId = wx.getStorageSync('storeId');
    let userId = Number(options.userId);
    wx.request({
      url: c.url+'statistics/statisticsDetail',
      method: 'post',
      data: {
        storeId: storeId,
        userId: userId,
      },
      header: {        'content-type': 'application/json'        , 'Cookie': 'ticket=' + wx.getStorageSync('ticket')      },
      success: (res) => {
        console.log(res);
        var placeBalace=[];
        if (res.data.code == 1000000){
          var list = res.data.data.reverse();
          list.forEach(function(e,i){
            if (e.statisticsDetailModelList.length>0){
              e.year = e.monthStr.substr(0, 4);
              e.month = e.monthStr.substr(5, 6);
              e.id = i+1;
              placeBalace.push(e);
            }
          })
          console.log(placeBalace)
          if (placeBalace.length<1){
            that.setData({
              noData: true
            })
          }
        }
        this.setData({
          placeBalace: placeBalace
        })
       
      }
    })
  },
  changeShow: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // this.dialog = this.selectComponent("#dialog");
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