import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend,
  configure
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import {
  TW,
  messages
} from 'vee-validate/dist/locale/zh_TW.json'
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
localize('zh_TW', TW)

// custom rule
extend('positive', value => {
  return value >= 10;
});
extend('phoneNum', {
  validate: value => {
    const num = /^[09]{2}[0-9]{8}$/
    if (value.match(num)) {
      return true
    }
  },
  message: '手機格式錯誤'
})

// vue-validate-easy
import vueValidateEasy from 'vue-validate-easy'
Vue.use(vueValidateEasy)