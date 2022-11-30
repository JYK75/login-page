<template>
  <button class="v-button" :type="type" @click="clickEvent" :class="[variant]">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'VButton',
    props: {
      type: {
        type: String,
        default: 'button',
      },
      variant: {
        type: String,
        default: 'contained', // contained, out-lined
      }
    },
    methods: {
      clickEvent() {
        this.$emit('click');
      }
    }
  };
</script>

<style lang='scss' scoped>
.v-button {
  width: 80px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  margin: 16px 0;
  transition-property: background-color, border-color,color,opacity;
  transition-duration: .2s;
  border: 1px solid rgba(0,0,0,.15);
  border-radius:3px;

  &:hover {
    border-color: #00b2b2;
    background-color: #00b2b2;
  }
}

.contained {
  background-color: #00c4c4;
  border: 1px solid #00c4c4;

  &:hover {
    border-color: #00b2b2;
    background-color: #00b2b2;
  }
}

.out-lined {
  background-color: #fff;
  border: 1px solid #00c4c4;
  color: #00c4c4;

  &:hover {
    border-color: #00c4c4;
    color: #fff;
  }
}
</style>