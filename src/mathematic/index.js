export default {
  /**
   * 乱序
   * @param {array} a 数据
   * @returns {array} 乱序后的数据
   */
  shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
  }
}