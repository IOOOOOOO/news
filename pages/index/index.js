Page({
  onTap: function (event) {
    // 在这里使用这个会导致底部导航出不来
    // wx.navigateTo({
    //   url: '../news/news',
    // });
    wx.switchTab({
      url: '../news/news',
    });
  },
  getUserInfo: function () {
    var that = this;
    _getUserInfo();
    function _getUserInfo () {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  }
})