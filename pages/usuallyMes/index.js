// pages/systemMes/index.js
const app=getApp();
var utils = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
      isShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMesList();
  },
 
  getMesList:function(){
    wx.request({
      url: app.getUseData.url + 'message/list', //
      method: 'post',
      data: {
        type: 2,
        pageIndex:1,
        pageSize:100
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000){
          if (res.data.data.content.length>0){
            res.data.data.content.forEach(function(item){
              item.time = utils.timeFormat(item.createdTime)
            })
            this.setData({
              mesList: res.data.data.content
            })
          }else{
            this.setData({
              isShow:false
            })
          }
        }
      }
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