Page({
  // 页面的初始数据
  data: {
    aboutContent: '这个是我的毕业设计题目！！！',
    features: [
      {
        id: 1,
        icon: 'search',
        title: '岗位搜索',
        description: '基于大量的职位信息和公司信息进行搜索'
      },
      {
        id: 2,
        icon: 'chat',
        title: '即时沟通',
        description: '企业与求职者实时在线交流'
      },
      {
        id: 3,
        icon: 'underway',
        title: '进度追踪',
        description: '随时查看申请进度和面试安排'
      },
      {
        id: 4,
        icon: 'umbrella-circle',
        title: '信息保护',
        description: '严格的个人信息保护机制'
      }
    ]
  },

  // 打开官网
  openWebsite() {
    wx.showModal({
      title: '提示',
      content: '即将打开外部浏览器访问官网',
      success(res) {
        if (res.confirm) {
          // 实际应用中替换为真实的官网地址
          wx.setClipboardData({
            data: '',
            success() {
              wx.showToast({
                title: '网址已复制',
                icon: 'success'
              });
            }
          });
        }
      }
    });
  },

  // 打开隐私政策
  openPrivacyPolicy() {
    wx.navigateTo({
      url: '/pages/privacy/privacy'
    });
  },

  // 打开用户协议
  openUserAgreement() {
    wx.navigateTo({
      url: '/pages/agreement/agreement'
    });
  }
});

