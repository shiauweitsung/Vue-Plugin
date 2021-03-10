<template>
  <div>
    <h1>驗證套件 vee-validate</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form action="" @submit.prevent="OnSubmit">
        <ValidationProvider
          v-slot="{ errors, classes }"
          rules="email"
          name="email"
        >
          <div class="inputFrom">
            <label for="email">email認證 : </label>
            <input :class="classes" v-model="email" type="text" id="email" />
            <span class="error-txt">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="confirmation">
          <div class="inputFrom">
            <label for="confirm">請輸入第一個</label>
            <input
              v-model="confirmCheck"
              type="text"
              id="confirm"
              name="check"
            />
            <span class="error-txt">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="confirmed:confirmation" v-slot="{ errors }">
          <div class="inputFrom">
            <label for="confirmCheck">與上方確認一樣</label>
            <input
              v-model="confirm"
              type="text"
              id="confirmCheck"
              name="checked"
            />
            <span class="error-txt">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="integer" v-slot="{ errors }">
          <div class="inputFrom">
            <label for="integer">只能輸入數字 否則跳錯</label>
            <input v-model="integer" type="text" id="integer" name="integer" />
            <span class="error-txt">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="phoneNum" v-slot="{ errors }">
          <div class="inputFrom">
            <label for="phoneNum">輸入手機號碼</label>
            <input v-model="phone" type="text" id="phoneNum" name="phoneNum" />
            <span class="error-txt">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <div class="inputFrom">
            <label for="required">必填項目</label>
            <input
              v-model="required"
              type="text"
              id="required"
              name="required"
            />
            <span class="error-txt">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <button type="submit" :disabled="invalid">送出</button>
      </form>
    </ValidationObserver>

    <ValidationObserver ref="form">
      <form action="" @submit.prevent="onSubmit2">
        <h4>送出表單前驗證，如果錯誤會callback</h4>
        <ValidationProvider
          mode="eager"
          rules="phoneNum|required"
          v-slot="{ errors }"
        >
          <div class="inputFrom">
            <label for="phoneNum2">輸入手機號碼</label>
            <input
              v-model="phone2"
              type="text"
              id="phoneNum2"
              name="phoneNum2"
            />
            <span class="error-txt">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <button type="submit">送出</button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  name: 'vee-validate',
  data () {
    return {
      email: '',
      confirm: '',
      confirmCheck: '',
      integer: '',
      phone: '',
      phone2: '',
      required: '',
      formPass: true
    }
  },
  methods: {
    OnSubmit () {
      alert('success')
    },
    onSubmit2 () {
      this.$refs.form.validate().then(success => {
        if (!success) {
          alert('error')
        } else {
          alert('Form has been submitted!');
        }
      });
    }
  }
}
</script>
<style lang="scss" scope>
.inputFrom {
  margin: 15px 0px;
}
label {
  margin-right: 10px;
}
input {
  padding: 5px 8px;
  border-radius: 4px;
}
.error-txt {
  color: red;
  font-size: 14px;
  margin: 0px 5px;
}
.is-invalid {
  border: 1px solid red;
  color: red;
}
</style>