var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getText:'2F89WE09'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getText = this.data.getText;
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: getText,
      width: 220,
      height: 220,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  },
  getPhoneNumber(e){
      console.log(e)
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