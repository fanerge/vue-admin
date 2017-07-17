/**
 * Created by yuzhenfan on 2017/6/16.
 */
<template>
  <div class="container">
    <p>
      {{title}}
    </p>
    <i class="el-icon-edit edit" @click="editItem"></i>
    <i class="el-icon-delete delete" @click="deleteItem"></i>
  </div>
</template>

<script>
  export default {
    name: 'ysClassItem',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      editItem: function () {
        console.log('编辑')
      },
      deleteItem: function () {
        console.log('删除')
      }
    }
  }
</script>
<style scoped>
  .container{
    position: relative;
    height: 100px;
    width: 200px;
    background: #e7e7e7;
    border-radius: 8px;
    cursor: pointer;
  }
  .container p{
    padding-top: 35px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    color: #333;
  }
  .container i{
    position: absolute;
    top: 8px;
    color: #666;
  }
  .container i.delete{
    right: 20px;
  }
  .container i.edit{
    right: 50px;
  }
</style>
