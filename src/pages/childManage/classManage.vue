<template>
  <div>
    <div>
      <el-button type="primary" icon="plus" @click="addClass">创建班级</el-button>
    </div>
    <div class="container">
      <div class="container-class" v-for="(parentItem, parentIndex) in classInfo" :key="parentItem">
        <h4 class="title">--{{parentItem.headTitle}}--</h4>
        <div>
          <el-row :gutter="20">
            <el-col :sm="6" :md="4" :lg="3" v-for="(item, childeIndex) in parentItem.classList" :key="childeIndex">
              <div class="grid-content">
                <div class="class-name">
                    {{item.title}}
                </div>
                <i class="el-icon-edit edit" @click="editItem(parentIndex,childeIndex)"></i>
                <i class="el-icon-delete delete" @click="deleteItem(parentIndex,childeIndex)"></i>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-dialog title="编辑班级" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="所属年级" :label-width="formLabelWidth">
          <el-select v-model="form.grade" placeholder="请选择所属年级">
            <el-option label="小班" value="small"></el-option>
            <el-option label="中班" value="normal"></el-option>
            <el-option label="大班" value="big"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属班级" :label-width="formLabelWidth">
          <el-input v-model="form.className" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="入学年份" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.year"
            align="right"
            type="year"
            placeholder="选择年">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="定额人数" :label-width="formLabelWidth">
          <el-input-number v-model="form.number" :min="1" :max="30"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'classManage',
    data () {
      return {
        classInfo: {
          small: {
            headTitle: '小班',
            classList: [
              {title: '星星一班'},
              {title: '星星二班'},
              {title: '星星三班'},
              {title: '星星四班'}
            ]
          },
          normal: {
            headTitle: '中班',
            classList: [
              {title: '星星一班'},
              {title: '星星二班'},
              {title: '星星三班'},
              {title: '星星四班'}
            ]
          },
          big: {
            headTitle: '大班',
            classList: [
              {title: '星星一班'},
              {title: '星星二班'},
              {title: '星星三班'}
            ]
          }
        },
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          grade: '',
          className: '',
          year: '',
          number:20
        }
      }
    },
    methods: {
      addClass: function () {
        this.dialogFormVisible = true
      },
      editItem: function (parent, child) {
        this.dialogFormVisible = true
      },
      deleteItem: function (parent, child) {
        this.$confirm('此操作将永久删除改班级, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.classInfo[parent]['classList'].splice(child, 1)
        }).catch()
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  .container{

  }
  .container-class{
    padding-bottom: 10px;
    border-bottom: 1px dashed #20a0ff;
  }
  .grid-content {
    position: relative;
    height: 90px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #42b983;
    background: #e7e7e7;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .grid-content:hover{
    border: 1px solid red;
    background: #20a0ff;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .title{
    height: 30px;
    line-height: 30px;
    font-size: 26px;
    color: #222;
  }
  .class-name{
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 18px;
    color: #444;
  }
  .el-col {
    border-radius: 8px;
  }
  .grid-content i{
    position: absolute;
    top: 8px;
    color: #666;
  }
  .grid-content i:hover{
    color: red;
  }
  .grid-content i.delete{
    right: 20px;
  }
  .grid-content i.edit{
    right: 50px;
  }
</style>
