<template>
  <div class="change-user-info">
    <!-- 按钮 -->
    <el-button
      size="mini"
      type="primary"
      @click="changeUserInfo"
      >修改</el-button
    >

    <!-- 对话框 -->
    <el-dialog
      title="修改管理员信息"
      :visible.sync="dialogFormVisible"
      :before-close="cancelChange"
    >
      <el-form :model="form">
        <el-form-item label="用户名" label-width="120px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" label-width="120px">
          <el-select v-model="form.role" placeholder="请选择管理员权限">
            <el-option label="admin" value="admin"></el-option>
            <el-option label="userManager" value="userManager"></el-option>
            <el-option label="shopManager" value="shopManager"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelChange">取 消</el-button>
        <el-button type="primary" @click="completeChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {changeUserInfoApi} from "@/utils"

export default {
  props: ["currentUser"],
  data() {
    return {
      form: {},
      dialogFormVisible: false,
    };
  },
  methods: {
    // 修改用户信息
    changeUserInfo(){
      this.form={...this.currentUser}
      this.dialogFormVisible=true
    },

    // 取消修改
    cancelChange() {
      this.dialogFormVisible = false;
    },

    // 确定修改
    completeChange() {
      changeUserInfoApi(this.form).then(res=>{
        let data=JSON.parse(res.data)
        if(data.meta.status===200){
          this.$message.success(data.meta.msg)
          this.$emit('updata')
        }else {
          this.$message.error(data.meta.msg)
        }
      }).catch(err=>{
        this.$message.error(err)
      })
      this.dialogFormVisible = false;
    },
  },
};
</script>