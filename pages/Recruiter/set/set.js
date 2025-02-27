Page({
  data: {
    companyInfo: {
      name: '科技有限公司',
      industry: '互联网/IT/电子/通信',
      size: '100-499人',
      address: '北京市朝阳区xxx街xxx号'
    }
  },

  onLoad() {
    // 页面加载时获取公司信息
    this.getCompanyInfo();
  },

  getCompanyInfo() {
    // TODO: 从服务器获取公司信息
    // 这里使用模拟数据，实际应用中应该通过API获取
    // this.setData({ companyInfo: response.data });
  },

	// 点击企业端联系客服按钮函数
  contactCustomerService() {
    // 实现联系客服功能，可以是拨打电话或跳转到客服会话
    wx.showModal({
      title: '联系客服',
      content: '是否拨打客服热线？',
      success: (res) => {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: '13279816133' // 要拨打的电话号码
          });
        }
      }
    });
	},
	
	// 跳转到关于我们
	about:function(){
		wx.navigateTo({
			url: '/pages/Recruiter/about-us/about-us',
		})
	},

  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除用户登录状态
          wx.removeStorageSync('userInfo');
          wx.removeStorageSync('token');

          // 跳转到首页
          wx.reLaunch({
            url: '/pages/index/index'
          });
        }
      }
    });
  },

  onPullDownRefresh() {
    // 实现下拉刷新逻辑
    this.getCompanyInfo();
    wx.stopPullDownRefresh();
  },

  onShareAppMessage() {
    // 自定义转发内容
    return {
      title: '求职招聘小程序 - 企业设置',
      path: '/pages/Recruiter/set/set'
    };
  }
});

