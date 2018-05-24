
Page({

  data: {
    
  },
  toView(){
    wx.navigateTo({
      url: "/pages/index/detail/detail?id=1"
    })
  },
  onReady() {
    wx.request({
      url: 'https://qydata.club/yxserver/api/activity/',
      data: {
        "page": 1,
        "page_size": 20
      },
      header: {
        'content-type': 'application/json'
      },
      success(data) {
        console.log(data)
      }
    })
  }
})