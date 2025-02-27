Page({
  // 页面的初始数据
  data: {
    // 表单数据
    formData: {
      jobTitle: '',
      categoryIndex: null,
      salaryMin: '',
      salaryMax: '',
      region: ['请选择', '请选择', '请选择'],
      experienceIndex: null,
      educationIndex: null,
      jobDuties: '',
      jobRequirements: ''
    },
    
    // 职位类别选项
    jobCategories: [
      '技术/研发',
      '产品/设计',
      '运营/市场',
      '销售/商务',
      '人事/行政',
      '财务/法务',
      '教育/培训',
      '其他'
    ],
    
    // 工作经验选项
    experienceOptions: [
      '应届生',
      '1-3年',
      '3-5年',
      '5-10年',
      '10年以上'
    ],
    
    // 学历要求选项
    educationOptions: [
      '不限',
      '大专',
      '本科',
      '硕士',
      '博士'
    ],
    
    // 公司福利选项
    benefits: [
      { id: 1, name: '五险一金', selected: false },
      { id: 2, name: '年终奖', selected: false },
      { id: 3, name: '加班补助', selected: false },
      { id: 4, name: '免费班车', selected: false },
      { id: 5, name: '节日福利', selected: false },
      { id: 6, name: '带薪年假', selected: false },
      { id: 7, name: '员工旅游', selected: false },
      { id: 8, name: '定期体检', selected: false }
    ],
    
    // 提交状态
    isSubmitting: false
  },

  // 输入框变化处理
  onInputChange(e) {
    const { field } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`formData.${field}`]: value
    });
  },

  // 职位类别选择处理
  onCategoryChange(e) {
    this.setData({
      'formData.categoryIndex': e.detail.value
    });
  },

  // 地区选择处理
  onRegionChange(e) {
    this.setData({
      'formData.region': e.detail.value
    });
  },

  // 工作经验选择处理
  onExperienceChange(e) {
    this.setData({
      'formData.experienceIndex': e.detail.value
    });
  },

  // 学历要求选择处理
  onEducationChange(e) {
    this.setData({
      'formData.educationIndex': e.detail.value
    });
  },

  // 福利标签切换
  toggleBenefit(e) {
    const { id } = e.currentTarget.dataset;
    const benefits = this.data.benefits.map(item => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    this.setData({ benefits });
  },

  // 表单验证
  validateForm() {
    const { formData } = this.data;
    
    // 检查必填字段
    if (!formData.jobTitle.trim()) {
      wx.showToast({
        title: '请输入职位名称',
        icon: 'none'
      });
      return false;
    }
    
    if (formData.categoryIndex === null) {
      wx.showToast({
        title: '请选择职位类别',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.salaryMin || !formData.salaryMax) {
      wx.showToast({
        title: '请输入薪资范围',
        icon: 'none'
      });
      return false;
    }
    
    if (Number(formData.salaryMin) > Number(formData.salaryMax)) {
      wx.showToast({
        title: '最低薪资不能大于最高薪资',
        icon: 'none'
      });
      return false;
    }
    
    if (formData.region[0] === '请选择') {
      wx.showToast({
        title: '请选择工作地点',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.jobDuties.trim()) {
      wx.showToast({
        title: '请输入工作职责',
        icon: 'none'
      });
      return false;
    }
    
    if (!formData.jobRequirements.trim()) {
      wx.showToast({
        title: '请输入任职要求',
        icon: 'none'
      });
      return false;
    }
    
    return true;
  },

  // 表单提交处理
  async submitForm() {
    if (!this.validateForm()) return;
    
    this.setData({ isSubmitting: true });
    
    try {
      // 准备提交的数据
      const submitData = {
        jobTitle: this.data.formData.jobTitle,
        category: this.data.jobCategories[this.data.formData.categoryIndex],
        salary: {
          min: Number(this.data.formData.salaryMin),
          max: Number(this.data.formData.salaryMax)
        },
        location: {
          province: this.data.formData.region[0],
          city: this.data.formData.region[1],
          district: this.data.formData.region[2]
        },
        experience: this.data.experienceOptions[this.data.formData.experienceIndex],
        education: this.data.educationOptions[this.data.formData.educationIndex],
        jobDuties: this.data.formData.jobDuties,
        jobRequirements: this.data.formData.jobRequirements,
        benefits: this.data.benefits.filter(item => item.selected).map(item => item.name),
        publishTime: new Date(),
        companyId: wx.getStorageSync('companyId'), // 从本地存储获取公司ID
        status: 'active'
      };

      // 调用云函数发布职位
      const result = await wx.cloud.callFunction({
        name: 'publishJob',
        data: submitData
      });

      if (result.result.success) {
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 2000
        });
        
        // 延迟返回上一页
        setTimeout(() => {
          wx.navigateBack();
        }, 2000);
      } else {
        throw new Error(result.result.message);
      }
    } catch (error) {
      wx.showToast({
        title: '发布失败，请重试',
        icon: 'none'
      });
    } finally {
      this.setData({ isSubmitting: false });
    }
  }
});

