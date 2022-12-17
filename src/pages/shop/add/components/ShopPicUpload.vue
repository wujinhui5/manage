<template>
  <div class="shop-pic-upload">
    <div class="main">
      <el-upload
        drag
        action="#"
        multiple
        ref="upload"
        class="upload-demo"
        accept=".jpg,.png"
        :on-change="onChange"
        :on-exceed="handExceed"
        :auto-upload="false"
        list-type="picture"
        :limit="5"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
    <div class="button">
      <div class="next">
        <el-button @click="handlePrev">上一步，填写商品基本信息</el-button>
      </div>
      <div class="create">
        <el-button type="primary" @click="handleAddShop">创建商品</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createShopApi } from "@/utils/shop";

export default {
  props: {
    form: Object,
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    onChange(file) {
      const type = file.name.substring(file.name.indexOf(".") + 1);
      if (type !== "jpg" && type !== "png") {
        this.$message.error("只能上传jpg/png文件");
        this.$refs.upload.uploadFiles.pop();
      } else if (parseInt(file.size) > 500000) {
        this.$message.error("只能上传不超过500kb的文件");
        this.$refs.upload.uploadFiles.pop();
      } else {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file.raw);
        fileReader.onload = (evt) => {
          this.files.push(evt.target.result);
        };
      }
    },
    handlePrev() {
      this.$emit("prevStep");
    },
    handExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    // 确认添加
    handleAddShop() {
      if (this.files.length === 0) {
        this.$message.error("请至少上传一张商品图片");
        return;
      }
      let data = JSON.stringify({
        uid: this.$store.state.user.uid,
        newShop: {
          ...this.form,
          shopPic: this.files,
        },
      });
      createShopApi(data)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.$router.push("/shop/addCompleted");
          } else this.$message.error(data.meta.msg);
        })
        .catch((err) => this.$message.error(err));
    },
  },
};
</script>

<style lang="less" scoped>
.shop-pic-upload {
  position: relative;
  .main {
    text-align: center;
  }
  .button {
    margin-top: 20px;
    .next {
      position: absolute;
      right: 50%;
      margin-right: 10px;
    }
    .create {
      position: absolute;
      left: 50%;
      margin-left: 10px;
    }
  }
}
</style>