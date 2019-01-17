const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    title:'大区',
    fuzeName:'校长',
    shopNum:78,
    regionId:'',
    personList: [
      {
        "name": "王小帅",
        "tel": 1236332323,
        "shopper": 20
      },
      {
        "name": "莉莉",
        "tel": 187772332123,
        "shopper": 20
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
      this.setData({
        regionId: options.regionId
      })
    this.regionManagerList();
  },
  addPerson:function(){
      wx.navigateTo({
        url:'/pages/addPerson/index'
      })
  },
  regionManagerList:function(){
    var regionId = Number(this.data.regionId);
    wx.request({
      url: app.getUseData.url + 'user/regionManagerList',
      method: 'post',
      data: {
        regionId: regionId
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
            this.setData({
              personList:res.data.data
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