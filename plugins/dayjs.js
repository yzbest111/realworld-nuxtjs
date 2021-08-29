import Vue from 'vue'
import dayjs from 'dayjs'

// 设置vue的全局过滤器
// {{ 表达式 | 过滤器}}
Vue.filter('FormatDate', (value, formatter = 'YYYY-MM-DD') => {
  return dayjs(value).format(formatter)
})
