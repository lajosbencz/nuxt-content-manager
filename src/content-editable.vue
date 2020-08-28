<script>
  export default {
    name: 'content-editable',
    props: {
      tag: 'span',
      editable: true,
    },
  }
</script>

<template>
    <component :is="tag" :contenteditable="editable">
        <slot>
            yeyeye
        </slot>
    </component>
</template>

<style lang="scss">
</style>
