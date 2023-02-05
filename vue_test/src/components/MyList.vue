<template>
  <ul class="todo-main">
        <MyItem></MyItem>
        <MyItem></MyItem>
      </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
name:'MyList',
components:{
    MyItem
}
}
</script>

<style>

</style>