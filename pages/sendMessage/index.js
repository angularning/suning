Page({

  /**
   * 页面的初始数据
   */
  data: {
    addIcon: '/image/addIconMes.png',
    desIcon:'/image/desIconMes.png',
    inputValue:'',
    roleBo1: true,
    roleBo2: true,
    roleBo3: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  role1: function () {
    this.setData({
      roleBo1: !this.data.roleBo1
    })
  },
  role2: function () {
    this.setData({
      roleBo2: !this.data.roleBo2
    })
  },
  role3: function () {
    this.setData({
      roleBo3: !this.data.roleBo3
    })
  },
  getValues: function(e) {
    // console.log(e);
     this.setData({
       inputValue: e.detail.value
     })
  },
  sendMessage:function(e){
    let inputValue = this.data.inputValue;
    console.log(inputValue);
    console.log(this.data.roleBo1);
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