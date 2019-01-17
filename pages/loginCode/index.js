const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: '获取验证码', //按钮文字
    currentTime: 61, //倒计时
    disabled: false, //按钮是否禁用
    phone: '', //获取到的手机栏中的值
    smsCode: ''

  },

  //获取手机栏input中的值
  getCode: function(e) {
    this.setData({
      smsCode: e.detail.value
    })
  },
  //获取验证码按钮
  bindButtonTap: function() {
    var that = this;
    var phone = that.data.phone;
    var currentTime = that.data.currentTime //把手机号跟倒计时值变例成js值
    var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
    that.setData({
      disabled: true, //只要点击了按钮就让按钮禁用 （避免正常情况下多次触发定时器事件）
      color: '#ccc',
    })
    wx.request({
      url: app.getUseData.url + 'common/smsSend',
      method: 'post',
      data: {
        mobile: phone
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res);
        if (res.statusCode == 200) {
          if (phone == '') {
            warn = "号码不能为空";
          } else if (phone.trim().length != 11 || !/^1[3|4|5|6|7|8|9]\d{9}$/.test(phone)) {
            warn = "手机号格式不正确";
          } else {
            //当手机号正确的时候提示用户短信验证码已经发送
            wx.showToast({
              title: '短信验证码已发送',
              icon: 'none',
              duration: 2000
            });
            //设置一分钟的倒计时
            var interval = setInterval(function() {
              currentTime--; //每执行一次让倒计时秒数减一
              that.setData({
                text: '重新发送' + currentTime + 's', //按钮文字变成倒计时对应秒数

              })
              //如果当秒数小于等于0时 停止计时器 且按钮文字变成重新发送 且按钮变成可用状态 倒计时的秒数也要恢复成默认秒数 即让获取验证码的按钮恢复到初始化状态只改变按钮文字
              if (currentTime <= 0) { 
                clearInterval(interval)
                that.setData({
                  text: '重新发送',
                  currentTime: 61,
                  disabled: false,
                  color: '#929fff'
                })
              }
            }, 1000);
          };
          //判断 当提示错误信息文字不为空 即手机号输入有问题时提示用户错误信息 并且提示完之后一定要让按钮为可用状态 因为点击按钮时设置了只要点击了按钮就让按钮禁用的情况
          if (warn != null) {
            wx.showModal({
              title: '提示',
              content: warn
            })
            that.setData({
              disabled: false,
              color: '#55B5FF'
            })
            return;
          };
        } else { 
          wx.showToast({
            title: res.data.msg,
            icon:'none'
          })
        }
      },
      fail: (e) => {
        console.log(e)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    this.setData({
      phone: options.mobile
    })
  },
  toAuth: function() {
    let smsCode = this.data.smsCode;
    var phone = this.data.phone;
    if (this.data.phone == null || this.data.phone == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
      });
      return
    }
    if (smsCode == null || smsCode == '') {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none',
      });
      return
    }

    var ticket = wx.getStorageSync('ticket')
    console.log(ticket)
    wx.request({
      url: app.getUseData.url+'user/register',
      method: 'post',
      data: {
        mobile: phone,
        smsCode: smsCode,
        ticket: ticket
      },
      header: app.getUseData.headerConfig,
      success: (res) => {
        console.log(res)
        if (res.data.code == 1000000) {
          wx.showToast({
            title: '' + res.data.msg,
            icon: 'none',
          })
          setTimeout(function(){
            wx.switchTab({
              url: '/pages/indexOne/index',
            })
          },1000)
        } else {
          wx.showToast({
            title: '' + res.data.msg,
            icon: 'none',
          })
        }
      }
    })

  }

})