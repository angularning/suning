const app=getApp();
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
    roleBo3: true,
    role:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  arrRemove:function (arr,val) {
    var index = arr.indexOf(val);
    if (index > -1) {
      arr.splice(index, 1);
      return arr
    }
  },
  role1: function () {
    this.setData({
      roleBo1: !this.data.roleBo1,
    });
    if (this.data.roleBo1==false){
      this.setData({
        roleRegion: 4
      })
    }else{
      this.setData({
        roleRegion: 'undefined'
      })
    }
  },
  role2: function () {
    this.setData({
      roleBo2: !this.data.roleBo2,
    })
    if (this.data.roleBo2 == false) {
      this.setData({
        roleStore: 3
      })
    } else {
      this.setData({
        roleStore: 'undefined'
      })
    }
  },
  role3: function () {
    this.setData({
      roleBo3: !this.data.roleBo3,
    })
    if (this.data.roleBo3 == false) {
     this.setData({
       roleAll: 0
     })
    } else {
      this.setData({
        roleAll: 'undefined'
      })
    }
  },
  getValues: function(e) {
    // console.log(e);
     this.setData({
       inputValue: e.detail.value
     })
  },
  sendMessage:function(e){
    console.log(this.data.role)
    let inputValue = this.data.inputValue;
    if (inputValue == '' || inputValue == null) {
      wx.showToast({
        title: '请输入通知内容',
        icon: 'none'
      });
      return
    }
    console.log(inputValue.length)
    if (inputValue.length>400) {
      wx.showToast({
        title: '不能超过400个字符',
        icon: 'none'
      });
      return
    }

    if (this.data.roleAll == undefined && this.data.roleStore == undefined && this.data.roleRegion==undefined) {
      wx.showToast({
        title: '请至少选择一个角色发送通知',
        icon: 'none'
      });
      return
    }
  //  /** 角色(店员) */
  //   private int roleClerk;

  // /** 角色(督导) */
  // private int roleStore;

  // /** 角色(大区经理) */
  // private int roleRegion;

  // /** 角色(所有人) */
  // private int roleAll;
    console.log(this.data.roleAll)
    console.log(this.data.roleStore)
    console.log(this.data.roleRegion)
    wx.request({
      url: app.getUseData.url + 'message/add', //
      method: 'post',
      data: {
        roleRegion: this.data.roleRegion == undefined ? -1 : this.data.roleRegion,
        roleStore: this.data.roleStore == undefined ? -1 : this.data.roleStore,
        roleAll: this.data.roleAll == undefined ? -1 : this.data.roleAll,
        messageText: inputValue,
        type: 2,
        channel: 1
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
           wx.showToast({
             title: '发送成功',
             icon:'none'
           })
        }else{
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