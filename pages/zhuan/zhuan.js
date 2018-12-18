var a = getApp();
Page({
    data: {
        sliderDisabled: "",
        awardsList: {},
        dateList: [],
        animationData: {},
        btnDisabled: "",
        actNum: "",
        awardsLen: 0,
        SYSTEMNUM:1,
        storageNum:0
    },
  onLoad: function (options) {
    this.getDateList();
    //fenxiang
    wx.showShareMenu({
      withShareTicket: true
    })
    wx.getStorage({
      key: 'un',
      success: function(res) {
        console.log(res.data)
      },
    });
    this.setData({
      // title: options.title
    });
    // this.checkUserLogin();
    wx.checkSession({
      success: function (res) {
        　　　　　　console.log("处于登录态");
            console.log(res)
      　　　　},
      　　　　fail: function (res) {
        　　　　　　console.log("需要重新登录");
        　　　　　　wx.login({})
      　　　　}
    })
  },
  
  getDateList(){
    const date= new Date().getMonth()+1;
    console.log(date);
    var list = []; 
    for(var i=0;i<30;i++){
      list.push({ 'date': i, "isQian": i / 2 });
      this.setData({
        dateList:list
      })
    }
    console.log(this.data.dateList)
  },
  checkUserLogin(){
    wx.login({
      success: res => {
        // ------ 获取凭证 ------
        var code = res.code;
        let wurl = "https://api.weixin.qq.com/sns/jscode2session?appid=wx5001013feaf5640c&secret=SECRET&js_code=JSCODE&grant_type=authorization_code";
        if (code) {
          // console.log('获取用户登录凭证：' + code);
          // ------ 发送凭证 ------
        
          wx.request({
            url: wurl,
            data: { code: code },
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              if (res.statusCode == 200) {
                console.log("获取到的openid为：" + res.data)
                // that.globalData.openid = res.data
                wx.setStorageSync('openid', res.data)
              } else {
                console.log(res.errMsg)
              }
            },
          })
        } else {
          console.log('获取用户登录失败：' + res.errMsg);
        }
      }
    })
  },
  //中奖通知
  userInfo(e){
    console.log(a.awardsConfig)
    // var openId = (wx.getStorageSync('openId'));
    if (e==0){
      wx.showModal({
        title: '中超级大大大大奖通知',
        content: '奖品为大美女' + a.awardsConfig.awards[e].name
      });
    }else{
      wx.showModal({
        title: '中奖通知',
        content: '你的奖品是第三个' + e + '，奖品为' + a.awardsConfig.awards[e].name
      });
    }
   
  },
    slider4change: function(e) {
        console.log("sliderindex发生 change 事件，携带值为", e.detail.value);
        var n = e.detail.value, t = [];
        if (2 == n) for (i = 0; i < 4; i++) t.push({
            index: i,
            name: i % n + 1
        }); else if (3 == n) for (i = 0; i < 6; i++) t.push({
            index: i,
            name: i % n + 1
        }); else for (var i = 0; i < n; i++) t.push({
            index: i,
            name: i + 1
        });
        a.awardsConfig = {
            chance: !0,
            awards: t
        },
         this.initAdards();
    },
    initAdards: function() {
        var e = this, n = a.awardsConfig.awards, t = n.length, i = 360 / t, s = i - 90, r = [], d = 1 / t;
        e.setData({
            btnDisabled: a.awardsConfig.chance ? "" : "disabled"
        });
        wx.createCanvasContext("lotteryCanvas");
        for (var o = 942.47778 / t, g = 0; g < t; g++) {
            // console.log(d + ":turnNum");
            var l = "rgba(255,203,30,0.5)";
            if (t % 2 == 0) l = 1 == (u = g % 2) ? "rgba(228,55,14,0.5)" : 2 == u ? "rgba(228,155,14,0.5)" : "rgba(255,203,30,0.5)"; else {
                var u = g % 2;
                l = g == t - 1 ? "rgba(228,155,14,0.5)" : 1 == u ? "rgba(228,55,14,0.5)" : "rgba(255,203,30,0.5)";
            }
          
            r.push({
                k: g,
                itemWidth: o + "px",
                item2BgColor: l,
                item2Deg: g * i + 90 - i / 2 + "deg",
                item2Turn: g * d + d / 2 + "turn",
                ttt: "",
                tttSkewX: 4 * t + "deg",
                afterDeg: s + "deg",
                turn: g * d + "turn",
                lineTurn: g * d + d / 2 + "turn",
                award: n[g].name
            });
        }
      
        e.setData({
            awardsLen: r.length,
            awardsList: r
        });
    },

    getLottery: function() {
      var that=this;
      console.log(that.data.SYSTEMNUM)
      let SYSTEMNUM = that.data.SYSTEMNUM++;
      wx.setStorage({
        key: 'un',
        data: SYSTEMNUM,
      });
        var e = this, n = a.awardsConfig, t = n.awards.length;
        console.log("len:" + t), console.log(a.awardsConfig);
        var i = Math.random() * t >>> 0;//控制中的是第几个奖品
        wx.getStorage({
          key: 'un',
          success: function(res) {
            console.log('从里面取出来的un值：'+res.data)
            that.data.storageNum=res.data;
          },
        });
      var storageNum = that.data.storageNum
      console.log('存在storageNum的值：'+storageNum);
      if (i == 0) {
        i = Math.random() * t >>> 0;
      }else{
        if (storageNum == 5) {
          i = 0;
        }
      }
      console.log('i:'+i)
        a.runDegs = a.runDegs || 0, console.log("deg", a.runDegs), a.runDegs = a.runDegs + (360 - a.runDegs % 360) + (2160 - i * (360 / t)), 
        console.log("deg", a.runDegs);
        var s = wx.createAnimation({
            duration: 4e3,
            timingFunction: "ease"
        });
      //弹出层面
      this.userInfo(i);

        e.animationRun = s, s.rotate(a.runDegs).step(), e.setData({
            animationData: s.export(),
            btnDisabled: "disabled",
            sliderDisabled: "disabled"
        }), setTimeout(function() {
            n.chance && e.setData({
                btnDisabled: "",
                sliderDisabled: ""
            });
          

        }, 4e3);
      
    },
    onReady: function(e) {
        var n = this;
        a.awardsConfig = {
            chance: !0,
            awards: [ {
                index: 0,
                name: "一等奖"
            }, {
                index: 1,
                name: "二等奖"
            }, {
                index: 2,
                name: "三等奖"
            }, {
                index: 3,
                name: "四等奖"
            }, {
                index: 4,
                name: "五等奖"
              }, {
                index: 5,
                name: "六等奖"
              }, {
                index: 6,
                name: "七等奖"
              }, {
                index: 7,
                name: "八等奖"
              } 
            ]
        }, this.initAdards(n);
    }
});