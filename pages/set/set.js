Page({
  data: {
    pushNotification: true,
    emailNotification: false
  },

	// 编辑个人信息页面
  onEditProfile() {
    wx.navigateTo({
      url: '/pages/edit-profile/edit-profile'
    });
  },

		// 点击退出登录事件
		onLogoutTap: function() {
			wx.showModal({
				title: '退出登录',
				content: '确定要退出登录吗？',
				success: (res) => {
					if (res.confirm) {
						wx.reLaunch({
							url: '/pages/index/index',
						})
						console.log('用户点击了确定');
					} else if(res.cancel) {
						console.log('用户点击了取消');
					}
				}
			});
		},
		
  onChangePassword() {
    wx.navigateTo({
      url: '/pages/change-password/change-password'
    });
  },

  onPushNotificationChange(event) {
    this.setData({ pushNotification: event.detail });
    // 这里应该调用API来更新用户的推送通知设置
  },

  onEmailNotificationChange(event) {
    this.setData({ emailNotification: event.detail });
    // 这里应该调用API来更新用户的邮件通知设置
  },

  onPrivacyPolicy() {
    wx.navigateTo({
      url: '/pages/privacy-policy/privacy-policy'
    });
  },

  onUserAgreement() {
    wx.navigateTo({
      url: '/pages/user-agreement/user-agreement'
    });
  },

  onClearCache() {
    wx.showModal({
      title: '清除缓存',
      content: '确定要清除所有缓存吗？',
      success: (res) => {
        if (res.confirm) {
          // 这里应该实现清除缓存的逻辑
          wx.showToast({
            title: '缓存已清除',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  },

  onCheckUpdate() {
    // 这里应该实现检查更新的逻辑
    wx.showLoading({
      title: '检查更新中...',
    });

    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '已是最新版本',
        icon: 'success',
        duration: 2000
      });
    }, 1500);
  },

	// // 点击退出登录事件
  // onLogout() {
  //   wx.showModal({
  //     title: '退出登录',
  //     content: '确定要退出登录吗？',
  //     success: (res) => {
  //       if (res.confirm) {
  //         // 这里应该实现退出登录的逻辑
  //         wx.reLaunch({
	// 					url: '/pages/index/index',
	// 				})
  //       }
  //     }
  //   });
  // }
});

