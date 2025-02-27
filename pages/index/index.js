// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
// 跳转到相应的用户端
  // 求职者按钮点击事件
  onJobSeekerTap() {
    // 保存用户角色
    wx.setStorageSync('userRole', 'jobseeker');
    // 跳转到求职者首页
    wx.reLaunch({
			url: '/pages/home/homs',
		});
  },

  // 招聘者按钮点击事件
  onEmployerTap() {
    // 保存用户角色
    wx.setStorageSync('userRole', 'recruiter');
    // 跳转到企业端首页
    wx.reLaunch({
      url: '/pages/Recruiter/index/index'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})