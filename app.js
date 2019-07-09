App({
  onLaunch () {
    var customTypeStr = wx.getStorageSync('customTypeStr');
    if (!customTypeStr)
      customTypeStr = ""
    this.globalData.arrTypeDetail[this.globalData.arrTypeDetail.length - 1] = customTypeStr;
    var index = wx.getStorageSync('selectIndex');
    if (!index)
      index = 0;
    var startWorkDate = wx.getStorageSync('startWorkDate');
    if (!startWorkDate) {
      startWorkDate = new Date();
      startWorkDate.setHours(0, 0, 0, 0);
    }


    this.globalData.startWorkDate = startWorkDate;
    this.globalData.workTurnTypeName = this.globalData.arrTypeName[index];
    this.globalData.workTurnType = this.globalData.arrTypeDetail[index];
    //注意
    // wx.cloud.init({
    //   env: 'envid',
    //   traceUser: true,
    // })
    // wx.getSystemInfo({
    //   success: (res) => {
    //     this.globalData.systeminfo = res
    //     this.globalData.isIPhoneX = /iphonex/gi.test(res.model.replace(/\s+/, ''))
    //   },
    // })
  },
  setWorkTurnType: function (name, type) {
    this.globalData.workTurnTypeName = name;
    this.globalData.workTurnType = type;
  },
  globalData: {
    workTurnTypeName: "",
    workTurnType: "",
    startWorkDate: {},
    arrTypeName: [
      "不显示倒班信息", //0
      "五班三运转", //1
      "四班两运转", //2
      "上三休三", //3
      "三班二运转",//4
      "四班三运转（两天一倒制）",//5
      "四班三运转（三天一倒制）",//6
      "自定义"],
    arrTypeDetail: [
      "",//0
      "中中白白夜夜休休休休",//1
      "白白夜夜休休休休",//2
      "白白全休休休",//3
      "白白夜夜休休",//4
      "白白中中休夜夜休",//5
      "白白白中中中休夜夜夜休休",//6
      ""
    ],

    // 是否保持常亮，离开小程序失效
    keepscreenon:false,
    systeminfo: {},
    isIPhoneX: false,
    key: 'ur hefengtianqi key',
    weatherIconUrl: 'https://cdn.heweather.com/cond_icon/',
    requestUrl: {
      weather: 'https://tianqiapi.com/ip/',
      hourly: 'https://free-api.heweather.com/s6/weather/hourly',
    },
  },
})