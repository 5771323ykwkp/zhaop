// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

	// 点击注册事件
	onRegister: function() {
    // 处理注册逻辑
    wx.showToast({
      title: '注册成功',
      icon: 'success'
    });
    // 这里可以添加跳转到登录页面的逻辑
	},

	// 点击立即登录按钮事件
	goToLogin:function(){
		wx.navigateTo({
			url: '/pages/logins/logins',
		})
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