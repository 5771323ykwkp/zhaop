Page({
  data: {
    searchValue: '',
    chatList: [
      {
        id: 1,
        name: '张三',
        avatar: '',
        lastMessage: '好的，我明天会准时参加面试',
        lastTime: '14:30',
        unreadCount: 2,
        online: true
      },
      {
        id: 2,
        name: '李四',
        avatar: '',
        lastMessage: '请问贵公司的工作时间是怎样的？',
        lastTime: '昨天',
        unreadCount: 0,
        online: false
      },
      {
        id: 3,
        name: '王五',
        avatar: '',
        lastMessage: '收到了，谢谢HR',
        lastTime: '星期一',
        unreadCount: 0,
        online: true
      }
    ],
    page: 1,
    pageSize: 10,
    hasMore: true
  },

  onLoad() {
    // 页面加载时获取聊天列表
    this.getChatList();
  },

  onShow() {
    // 页面显示时更新未读消息数
    this.updateUnreadCount();
  },

  // 获取聊天列表
  getChatList() {
    // 这里应该调用后端API获取聊天列表
    // 目前使用模拟数据
  },

  // 更新未读消息数
  updateUnreadCount() {
    // 调用后端API获取最新的未读消息数
  },

  // 搜索变化处理
  onSearchChange(e) {
    const searchValue = e.detail;
    this.setData({ searchValue });
    // 根据搜索值过滤聊天列表
    this.filterChatList(searchValue);
  },

  // 过滤聊天列表
  filterChatList(searchValue) {
    if (!searchValue) {
      this.getChatList(); // 如果搜索值为空，恢复原列表
      return;
    }

    const filteredList = this.data.chatList.filter(item => 
      item.name.includes(searchValue) || 
      item.lastMessage.includes(searchValue)
    );

    this.setData({ chatList: filteredList });
  },

  // 跳转到聊天详情页
  navigateToChat(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/Recruiter/chat-detail/chat-detail?id=${id}&name=${name}`
    });
  },

  // 加载更多
  loadMore() {
    if (!this.data.hasMore) return;
    
    // 这里应该调用后端API加载更多聊天记录
    this.setData({
      page: this.data.page + 1
    });
    this.getChatList();
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.setData({
      page: 1,
      chatList: []
    });
    this.getChatList();
    wx.stopPullDownRefresh();
  },

	openChat(e) {
    const { userid } = e.currentTarget.dataset;
    // 打开微信客服会话
    wx.openCustomerServiceChat({
      extInfo: { url: 'https://work.weixin.qq.com/kfid/kfc6c6f0a58995e7f8f' },
      corpId: 'YOUR_CORP_ID', // 企业ID，需要替换为实际的企业ID
      success(res) {
        console.log('打开客服会话成功', res);
      },
      fail(err) {
        console.error('打开客服会话失败', err);
        wx.showToast({
          title: '打开聊天窗口失败',
          icon: 'none'
        });
      }
    });
	},
	
  // 客服消息处理
  handleContact(e) {
    console.log('客服消息事件：', e.detail);
  }
});

