<template>
  <div>
    <h1>vue validate eazy plugin</h1>
    <form class="example_1">
      <div
        class="my-form-group"
        data-scope="example_1"
        data-name="email"
        data-type="input"
        v-validate-easy="[['required', '郵箱為必填項目'], ['email']]"
      >
        <label>
          <div class="label">郵箱</div>
          <input
            class="input"
            type="text"
            spellcheck="false"
            placeholder="請輸入郵箱"
          />
        </label>
      </div>

      <div
        class="my-form-group"
        data-scope="example_1"
        data-name="any"
        data-type="input"
        v-validate-easy
      >
        <label>
          <div class="label">隨便寫點什麼</div>
          <input
            class="input"
            type="text"
            spellcheck="false"
            placeholder="該字段不做驗證"
          />
        </label>
      </div>

      <div
        class="my-form-group"
        data-scope="example_1"
        data-name="number"
        data-type="input"
        v-validate-easy="[['number']]"
      >
        <label>
          <div class="label">數字（非必須但有值需要驗證）</div>
          <input
            class="input"
            type="text"
            spellcheck="false"
            placeholder="輸入一段數字"
          />
        </label>
      </div>

      <div class="btn-group">
        <button class="my-btn" @click.prevent="submit('example_1')">
          提交表單
        </button>
        <button class="my-btn" @click.prevent="reset('example_1')">
          重置表單
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'validate-eazy',
  methods: {
    reset (scope) {
      this.V.$reset(scope)
    },
    submit (scope) {
      this.V.$submit(scope, (canSumit, data) => {
        // canSumit為true時，則所有該scope的所有表單驗證通過
        if (!canSumit) return

        // 只有驗證全部通過才會執行
        console.log('驗證通過的數據' + data)
        alert('驗證通過,數據如下\n' + JSON.stringify(data))

      })
    }
  }
}
</script>
<style lang="scss" scoped>
label {
  margin-right: 10px;
}
input {
  padding: 5px 8px;
  border-radius: 4px;
}
.err__ input.input {
  border: 1px solid red;
}
.succ__ input.input {
  border: 1px solid green;
}
.err__msg {
  color: red;
  display: block;
  font-size: 14px;
}
</style>