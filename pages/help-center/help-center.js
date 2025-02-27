Page({
  // 页面的初始数据
  data: {
    commonQuestions: [
      {
        id: 1,
        question: '如何修改我的简历？',
        answer: '进入"我的"->"我的简历"页面，点击相应部分的编辑按钮即可修改简历信息。',
        showAnswer: false
      },
      {
        id: 2,
        question: '如何查看申请进度？',
        answer: '在"我的"页面顶部可以看到不同状态的申请数量，点击对应状态可以查看详细申请记录。',
        showAnswer: false
      },
      {
        id: 3,
        question: '如何与企业沟通？',
        answer: '在职位详情页点击"申请职位"后，可以在"消息中心"中与企业进行沟通。',
        showAnswer: false
      }
    ],
    contactInfo: {
      email: '193445146@qq.com',
      phone: '13279816133',
      address: '新疆维吾尔自治区乌鲁木齐市沙依巴克区499号新疆大学（友好校区）'
    }
  },

  // 显示问题答案
  showAnswer(e) {
    const questionId = e.currentTarget.dataset.id;
    const questions = this.data.commonQuestions.map(q => {
      if (q.id === questionId) {
        return { ...q, showAnswer: !q.showAnswer };
      }
      return q;
    });
    
    this.setData({
      commonQuestions: questions
    });
  },

  // 复制文本
  copyText(e) {
    const text = e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: text,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        });
      }
    });
  },

  // 跳转到意见反馈页面
  onFeedbackTap() {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  }
});

