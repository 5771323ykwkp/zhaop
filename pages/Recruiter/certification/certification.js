Page({
  data: {
    formData: {
      companyName: '',
      creditCode: '',
      scale: '',
      industry: '',
      license: '',
      contactName: '',
      contactTitle: '',
      contactPhone: '',
      contactEmail: ''
    },
    submitting: false,
    showScalePicker: false,
    showIndustryPicker: false,
    scaleOptions: [
      '0-20人',
      '20-99人',
      '100-499人',
      '500-999人',
      '1000-9999人',
      '10000人以上'
    ],
    industryOptions: [
      '互联网/IT/电子/通信',
      '金融/投资/银行/保险',
      '房地产/建筑/建材/工程',
      '贸易/批发/零售/租赁',
      '教育/培训/院校',
      '服务业',
      '制造业',
      '其他行业'
    ]
  },

  // 输入框变化处理
  onInputChange(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [`formData.${field}`]: e.detail
    });
  },

  // 显示企业规模选择器
  showScalePicker() {
    this.setData({ showScalePicker: true });
  },

  // 关闭企业规模选择器
  closeScalePicker() {
    this.setData({ showScalePicker: false });
  },

  // 确认企业规模选择
  onScaleConfirm(e) {
    this.setData({
      'formData.scale': e.detail.value,
      showScalePicker: false
    });
  },

  // 显示行业选择器
  showIndustryPicker() {
    this.setData({ showIndustryPicker: true });
  },

  // 关闭行业选择器
  closeIndustryPicker() {
    this.setData({ showIndustryPicker: false });
  },

  // 确认行业选择
  onIndustryConfirm(e) {
    this.setData({
      'formData.industry': e.detail.value,
      showIndustryPicker: false
    });
  },

  // 上传营业执照
  uploadLicense() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        // 这里应该调用上传API，现在仅做展示
        this.setData({
          'formData.license': tempFilePath
        });
      }
    });
  },

  // 删除营业执照
  deleteLicense() {
    this.setData({
      'formData.license': ''
    });
  },

  // 表单验证
  validateForm() {
    const { formData } = this.data;
    
    if (!formData.companyName.trim()) {
      wx.showToast({
        title: '请输入企业名称',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.creditCode.trim()) {
      wx.showToast({
        title: '请输入统一社会信用代码',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.scale) {
      wx.showToast({
        title: '请选择企业规模',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.industry) {
      wx.showToast({
        title: '请选择所属行业',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.license) {
      wx.showToast({
        title: '请上传营业执照',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.contactName.trim()) {
      wx.showToast({
        title: '请输入联系人姓名',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.contactPhone.trim()) {
      wx.showToast({
        title: '请输入联系电话',
        icon: 'none'
      });
      return false;
    }
    
    // 验证手机号格式
    if (!/^1[3-9]\d{9}$/.test(formData.contactPhone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.contactEmail.trim()) {
      wx.showToast({
        title: '请输入电子邮箱',
        icon: 'none'
      });
      return false;
    }
    
    // 验证邮箱格式
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.contactEmail)) {
      wx.showToast({
        title: '请输入正确的邮箱',
        icon: 'none'
      });
      return false;
    }
    
    return true;
  },

  // 提交表单
  async submitForm() {
    if (!this.validateForm()) return;
    
    this.setData({ submitting: true });
    
    try {
      // 这里应该调用后端API提交认证信息
      await new Promise(resolve => setTimeout(resolve, 2000)); // 模拟API调用
      
      wx.showToast({
        title: '提交成功',
        icon: 'success'
      });
      
      // 延迟返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      
    } catch (error) {
      wx.showToast({
        title: '提交失败，请重试',
        icon: 'none'
      });
    } finally {
      this.setData({ submitting: false });
    }
  }
});

