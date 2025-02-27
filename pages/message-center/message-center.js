Page({
  // 页面的初始数据
  data: {
    messageList: [
      {
        id: 1,
        companyName: '科技有限公司',
        avatar: '',
        lastMessage: '您好，关于您应聘的前端开发职位!',
        lastTime: '10:30'
      },
      {
        id: 2,
        companyName: '互联网金融公司',
        avatar: '',
        lastMessage: '请问您什么时候方便参加面试？',
        lastTime: '昨天'
      },
      {
        id: 3,
        companyName: '电商科技公司',
        avatar: '',
        lastMessage: '恭喜您通过初筛，请准备下一轮面试。',
        lastTime: '周一'
      }
    ]
  },

  // 启动聊天
  startChat(e) {
    const companyId = e.currentTarget.dataset.id; //获取公司ID
    // 获取目标企业信息
    const company = this.data.messageList.find(item => item.id === companyId);
    
    // 调用微信原生聊天接口
    wx.openCustomerServiceChat({
      extInfo: { url: 'https://work.weixin.qq.com/kfid/kfc' + companyId },
      corpId: '1', // 企业ID，需要替换为实际的企业ID
      success(res) {
        console.log('打开聊天窗口成功', res);
      },
      fail(err) {
        console.error('打开聊天窗口失败', err);
        wx.showToast({
          title: '打开聊天窗口失败',
          icon: 'none'
        });
      }
    });
  },

  onLoad() {
    // 页面加载时获取消息列表
    this.getMessageList();
  },

  // 获取消息列表
  getMessageList() {
    // 这里应该调用后端API获取实际的消息列表
    // 目前使用模拟数据
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.getMessageList();
    wx.stopPullDownRefresh();
  },

  // 上拉加载更多
  onReachBottom() {
    // 实现加载更多消息的逻辑
  }
});

