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
        default: 'contained', // contained, outlined
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
  color: $white;
  cursor: pointer;
  transition-property: background-color, border-color,color,opacity;
  transition-duration: .2s;
  border: 1px solid rgba(0,0,0,.15);
  border-radius:3px;

  &:hover {
    border-color: $primary-focus;
    background-color: $primary-focus;
  }
}

.contained {
  background-color: $primary;
  border: 1px solid $primary;

  &:hover {
    border-color: $primary-focus;
    background-color: $primary-focus;
  }
}

.outlined {
  background-color: $white;
  border: 1px solid $primary;
  color: $primary;

  &:hover {
    border-color: $primary;
    color: $white;
  }
}
</style>