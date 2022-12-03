<template>
  <div class="v-input">
    <input :type="type" :value="value" @input="change" class="v-input__text" 
    :class="{error: isError}" :placeholder="placeholder"
    @keypress.enter="$emit('enter')" @blur="$emit('blur')"
    />
    <span v-if="isError && errorMsg" class="error-msg">{{ errorMsg }}</span>
  </div>
</template>


<script>
  export default {
    name: 'VInput',
    props: {
      value: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
      },
      isError: {
        type: Boolean,
        default: false,
      },
      errorMsg: {
        type: String,
        default: '',
      }
    },
    methods: {
      change(event) {
        this.$emit('input', event.target.value);
      }
    }
  };
</script>

<style lang='scss' scoped>
  .v-input {
    display: inline-block;
    width: 120px;
    height: 30px;

    &__text {
      width: 100%;
      height: 100%;
      outline: none;
      border: 1px solid rgba(0,0,0,.15);
      padding-left: 8px;
      box-sizing: border-box;

      &:hover {
        border-color: rgba(0, 0, 0, .54);
      }

      &:focus {
        border-color: $primary;
      }
      &.error {
        border: 1px solid $error;
      }
    }

    .error-msg {
      color: $error;
      font-size: 12px;
    }
  }
</style>
