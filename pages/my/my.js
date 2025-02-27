Page({
  data: {
    userInfo: {
      avatarUrl: '',
      name: ''
    },
    statusCounts: {
      pending: 2,
      interviewing: 1,
      accepted: 3,
      rejected: 1
    }
  },
  
  onLoad: function(options) {
    this.getUserInfo();
    this.getStatusCounts();
  },

  getUserInfo: function() {
    this.setData({
      userInfo: {
        avatarUrl: '/image/my/succes.png',
        name: 'Eminem'
      }
    });
  },

  getStatusCounts: function() {
    this.setData({
      statusCounts: {
        pending: 2,
        interviewing: 1,
        accepted: 3,
        rejected: 1
      }
    });
  },

  onAvatarTap: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log('头像已选择:', res.tempFilePaths[0]);
      }
    });
  },

  onSettingsTap: function() {
    wx.navigateTo({
      url: '/pages/set/set'
    });
  },

  onApplicationHistoryTap: function(e) {
    const status = e.currentTarget.dataset.status;
    wx.navigateTo({
      url: `/pages/application-history/application-history?status=${status}`
    });
  },

  onResumeTap: function() {
    wx.navigateTo({
      url: '/pages/resume/resume'
    });
  },

	// 用户登录和注册
	loginRegister:function(){
		wx.navigateTo({
			url: '/pages/logins/logins',
		})
	},
  onFavoritesTap: function() {
    wx.navigateTo({
      url: '/pages/favorites/favorites'
    });
  },

  onMessageCenterTap: function() {
    wx.navigateTo({
      url: '/pages/message-center/message-center'
    });
  },

  onHelpCenterTap: function() {
    wx.navigateTo({
      url: '/pages/help-center/help-center'
    });
  },

  onAboutUsTap: function() {
    wx.navigateTo({
      url: '/pages/about-us/about-us'
    });
  },


});

