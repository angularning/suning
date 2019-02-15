const u = require('../../utils/util.js');
const utils = require('../../utils/util.js');
const c=u.a(); 
const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    currentInput:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  mesInput:function(e){
    this.setData({
      currentInput: e.detail.value
    })
  },
  subBtn:function(){
    var currentInput = this.data.currentInput;
    if (currentInput == '' || currentInput==null){
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }
    wx.request({
      url: c.url + 'userFeedBack/add', //
      method: 'post',
      data: {
        // role: this.data.role,
        content: currentInput
      },
      header: {        'content-type': 'application/json'        , 'Cookie': 'ticket=' + wx.getStorageSync('ticket')      },
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          wx.showToast({
            title: '提交成功',
            icon: 'none'
          });
         setTimeout(function(){
           wx.switchTab({
             url: '/pages/my/index',
           })
         },1000)
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
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