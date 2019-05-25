export default {
  // 手机号匹配
  mobile: /^1\d{10}$/,
  // 密码匹配,匹配6-32个中英文字符
  password: /^[A-Za-z0-9]{6,32}$/,
  // 电话号码匹配
  phone: /^((d{3,4})|d{3,4}-)?d{7,8}$/,
  // 电子邮箱匹配
  email: /^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/,
  // 银行卡匹配
  card: /^\d{16}|\d{19}$/,
  // 姓名匹配
  name: /^(\u4E00-\u9FA5){2,}$/,
  // qq号匹配
  QQ: /^[1-9][0-9]{4,}$/,
  // 验证码匹配
  verificationCode: /^[A-Za-z0-9]{1,6}$/,
  // URL地址
  url: new RegExp('(http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?', 'gi'),
  // 非空数字校验，包含负数
  number: /^-?[0-9]+/,
}