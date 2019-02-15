const u = require('../../utils/util.js');
const c = u.a();
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    dianyuan3List: [
    ],
    page:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getList(this.data.page,10);
  },
  getList(page,size){
    let that = this;
    var ticket = wx.getStorageSync('ticket');
    let storeId = wx.getStorageSync('storeId');
    wx.request({
      url: c.url + 'user/userList', //
      method: 'post',
      data: {
        storeId: storeId,
        pageIndex: page,
        pageSize: size
      },
      header: {
        'content-type': 'application/json',
        'Cookie': 'ticket=' + wx.getStorageSync('ticket')
      },
      success: (res) => {
        console.log(res);
        var dianyuan3List = that.data.dianyuan3List;
        for (var i = 0; i < res.data.data.content.length; i++) {
          dianyuan3List.push(res.data.data.content[i]);
        }
        // 设置数据
        that.setData({
          dianyuan3List: that.data.dianyuan3List
        })
        wx.hideLoading();
        console.log(this.data.dianyuan3List);
      }
    })
  },
  addShopper: function() {
    wx.navigateTo({
      url: '/pages/addShopper/index',
    })
  },
  toShopperDetail: function(e) {
    console.log(e)
    let userId = e.currentTarget.dataset.id;
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/shopperDetail/index?userId=' + userId + '&name=' + name,
    })
  },
  //   / user / userList
  // storeId
  // pageIndex
  // pageSize
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
    wx.showLoading({
      title: '加载中......'
    })
    if (this.data.dianyuan3List.length > 0) {
      wx.hideLoading();
    }
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


  showDialog: function() {
    this.dialog.showDialog();
  },
  _confirmEvent: function() {
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
      this.getList(this.data.page++,10)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})