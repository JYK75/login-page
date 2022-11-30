<template>
  <div class="v-input">
    <input :type="type" :value="value" @input="change" class="v-input__text" :placeholder="placeholder" />
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
    width: 12px;
  }
  .v-input__text {
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid rgba(0,0,0,.15);

    &:hover {
      border-color: rgba(0, 0, 0, .54);
    }

    &:focus {
      border-color: $primary;
    }
  }
</style>
