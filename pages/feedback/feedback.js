Page({
  data: {
    feedbackContent: ''
  },

  // 输入内容变化时的处理函数
  onInputChange(e) {
    this.setData({
      feedbackContent: e.detail.value
    });
  },

  // 重置按钮点击事件
  resetFeedback() {
    wx.showModal({
      title: '确认重置',
      content: '您确定要清空当前输入的内容吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            feedbackContent: ''
          });
          wx.showToast({
            title: '已重置',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  },

  // 提交按钮点击事件
  submitFeedback() {
    if (!this.data.feedbackContent.trim()) {
      wx.showToast({
        title: '请输入反馈内容',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 这里应该调用API将反馈内容提交到服务器
    // 现在我们只是模拟提交过程
    wx.showLoading({
      title: '提交中...',
    });

    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      });

      // 提交成功后清空输入
      this.setData({
        feedbackContent: ''
      });

      // 延迟返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 2000);
    }, 1500);
  }
});

