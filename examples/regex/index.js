import { Regex } from '../../index.js'

const tel = document.getElementById('tel')
const tip = document.getElementById('tip')
tel.addEventListener('input', () => {
  tip.className = Regex.mobile.test(tel.value) ? '' : 'hide'
})