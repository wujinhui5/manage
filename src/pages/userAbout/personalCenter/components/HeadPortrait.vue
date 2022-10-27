<template>
  <div class="head-portrait">
    <div class="pic">
      <img ref="img" :src="this.$store.state.user.headPortrait" alt="头像" />
    </div>
    <el-button
      class="open-dialog"
      size="mini"
      type="primary"
      @click="dialogFormVisible = true"
      >修改</el-button
    >

    <!-- 对话框 -->
    <el-dialog
      title="修改管理员信息"
      :visible.sync="dialogFormVisible"
      :before-close="cancelChange"
    >
      <input type="file" ref="file" @change="showImgToView" />
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelChange">取 消</el-button>
        <el-button type="primary" @click="completeChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { changeHeadPortraitApi } from "../../../../utils";

export default {
  data() {
    return {
      dialogFormVisible: false,
      imgFile: [],
    };
  },
  methods: {
    showImgToView() {
      if (!/(PNG|png|jpg|JPG)/.test(this.$refs.file.files[0].name)) {
        this.$message.error("只能上传png或jpg格式的文件");
        this.imgFile = {};
      } else {
        this.imgFile = this.$refs.file.files[0];
      }
    },

    cancelChange() {
      this.dialogFormVisible = false;
    },

    completeChange() {
      this.dialogFormVisible = false;
      if (!this.imgFile) {
        this.$message.error("只能上传png或jpg格式的文件");
        return;
      }
      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.imgFile);
      fileReader.onload = (evt) => {
        let data={
            uid:this.$store.state.user.uid,
            headPortrait:evt.target.result
        }
        changeHeadPortraitApi(data).then(res=>{
            let data=JSON.parse(res.data)
            if(data.meta.status===200){
                this.$message.success(data.meta.msg)
                this.$emit("updata")
            }else{
                this.$message.error(data.meta.msg)
            }
        }).catch(err=>{
            this.$message.error(err)
        })
      };
    },
  },
};
</script>

<style scoped>
.head-portrait {
  height: 80px;
}

.pic {
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  cursor: pointer;
}

.pic img {
  width: 100%;
  height: 100%;
}

.open-dialog {
  float: right;
  margin: 26px 14px 0 0;
}
</style>