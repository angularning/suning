const u = require('../../utils/util.js');
const c = u.a(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    showListTrue: true,
    showListFalse:false,
    up: '/image/historyIconUp.png',
    down:'/image/historyIconDown.png',
    placeBalace:[
      {
        id:1000,
        year:2018,
        month:12,
        wealth:10000,
        shopper:199,
        yeWuList: [
          {
            name: "百度拉新",
            wealth: 10000
          },
          {
            name: "百度拉新1",
            wealth: 10000
          },
          {
            name: "百度拉新1",
            wealth: 10000
          }
        ]
      },
      {
        id: 11,
        year: 2018,
        month: 11,
        wealth: 9999,
        shopper: 100,
        yeWuList: [
          {
            name: "百度拉新11",
            wealth: 10000
          },
          {
            name: "百度拉新111",
            wealth: 10000
          },
          {
            name: "百度拉新1",
            wealth: 10000
          }
        ]
      }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  changeShow:function(e){
    console.log(e);
    if (e.currentTarget.dataset.type=='up'){
        
    } else if (e.currentTarget.dataset.type == 'down'){

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