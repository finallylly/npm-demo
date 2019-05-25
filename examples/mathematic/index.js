import { Mathematic } from '../../index.js'

const dom = document.getElementById('shuffle')
const shuffleBtn = document.getElementById('shuffleBtn')
let rst = []

shuffleBtn.addEventListener('click', () => {
  rst = Mathematic.shuffle([1, 3, 4, 5, 6])
  dom.textContent = rst.toString().replace(/,/g, ' ')
})


/**
 * 测试一些高级语法
 */
function speak() {
  const a = [1, 2, 3]
  const b = [...a, 4, 5]
  const c = { name: 'kitty', age: 7 }
  const d = { ...c, gendar: 'female' }
  console.log(b, d)
}
console.log(speak())