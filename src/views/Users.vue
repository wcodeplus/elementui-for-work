<template>
  <div class="user-box">
    <el-row style="margin-bottom: 30px;">
      <el-col :span="24">
        <el-card class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="mock数据" name="first">
              1. 要点<br>
              （1）mock.js文件引入mockjs且组装数据和定义接口<br>
              （2）main.js文件引入mock.js文件和axios<br>
              ① mock.js 暴露接口，如 /api/users <br>
              ② axios首先将自己绑定到Vue.prototype.$http实现this.$http调用，再通过接收接口如/api/users获得数据 <br>
              2. 其他<br>
              （1）mock语法参考doc/mock语法.md<br>
              （2）获取的数据是一个数组
            </el-tab-pane>
            <el-tab-pane label="table分页" name="second">
              1. 要点<br>
              （1）el-table设置:data<br>
              （2）el-pagination设置:current-page(后端返回的当前页)、:page-sizes(每页多少条选项)、:page-size(后端返回的每页多少条)和:total(后端返回的总条数)<br>
              注意：一定要给el-table设置一个:page-size长度的第一页数据，不然el-table和el-pagination连不起来<br>
              （3）分页条上切换每页条数@size-change和点击页码@current-change的操作函数 <br>
              2. 具体实现<br>
              （1）template里：如上要点，el-table和el-pagination的设置<br>
              （2）data里：预设定pageData:{ current: 1, size: 10, total: 0 }<br>
              （3）后台返回数据getData里：res.data.pageData 赋值给 data 里面的 pageData<br>
              （4）切换每页条数@size-change和点击页码@current-change <br>
              注意：也可以像本页面那样，将数据直接赋值<br>
              （5）表格宽度太长，可以通过设置某一列的 fixed="right" 来限定横线滚动条
            </el-tab-pane>
            <el-tab-pane label="table跨页选择" name="third">
              1. 要点<br>
              （1）el-table设置一个变化的row-key<br>
              （2）第一个el-table-column（type="selection"的那个）设置:reserve-selection="true"<br>
              2. 跨页取值<br>
              （1）由@selection-change获取选取行<br>
              （2）获取的数据是一个数组
            </el-tab-pane>
            <el-tab-pane label="dialog" name="fourth">
              养成好习惯：所有form表单或者table都要规范化编写，该有ref、model、rules、item porp的都别少 <br>
              ============ <br>
              1. 要点<br>
              （1）显示和隐藏：设置:visible.sync的布尔取值，有四种隐藏方式（点击框外、按ESC、点击右上角x，点击确定/取消）<br>
              （2）缓存问题（数据缓存、验证缓存）<br>
              2. 显示隐藏<br>
              （1）方式：改变:visible.sync的布尔取值<br>
              （2）操作：<br>
              ①点击框外：可以通过设置close-on-click-modal属性设定是否可以点击框外隐藏<br>
              ②点击右上角x：可以通过show-close设置是都显示那个x<br>
              ③按ESC：可以通过close-on-press-escape设置<br>
              ④点击取消/确定按钮：@click<br>
              （3）最优解<br>
              ①绑定before-close属性：before-close 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。<br>
              ②绑定@close方法：四种关闭方式都可以监听，所以@close为最优解！！<br>
              ③同@close的还有@open方法，可以监听弹窗的打开 <br>
              3. 缓存问题<br>
              （1）数据缓存：在关闭时用@close监听<br>
              ①清空：<br>
              ②还原（如编辑页面，还原后还有原数据）：this.$refs[formName].resetFields()，<br>
              要使用这个方法得满足四个条件（定义 ref 属性、绑定 model、 FormItem 中有 prop 属性、model 中绑定的属性与 prop 中相同，注意ref和model别相同）<br>
              如果要用这个方法做数据清空，需要使用this.$nextTick，具体的请查看doc/Vue.$nextTick问题.md
              （2）验证缓存：dialog消失的时候（不管是哪种消失，统一用 @close 接管）<br>
              （3）最佳实践：全部用还原来做 <br>
              ①编辑中退出 - 还原：this.$refs[formName].resetFields()<br>
              ②新增中退出 - 清空：this.$nextTick(()=>{ formName.xxx = "" ...})<br>
              ③搜索后重置 - 还原(有时候搜索项会有默认值)：this.$refs[formName].resetFields()<br>
            </el-tab-pane>
            <el-tab-pane label="条件搜索" name="fifth">
              1. 要点<br>
              （1）组件宽度不同<br>
              （2）组件多排后高度不够<br>
              （3） <br>
              2. 具体实现<br>
              （1）组件宽度：col分好后，el-input是inline-block（撑满），其他的是inline（有固定宽度），要统一的话在非input上加style="width:100%"，<br>
              （2）单个e-row里面成多排，排之间的高度：设置.el-form-item的height值即可（这里要区分多个el-row的情况，多个el-row在el-row上设置:gutter即可）<br>
              （3）<br>
              （4）<br>
            </el-tab-pane>
            <el-tab-pane label="上传/下载" name="sixth">
              1. 要点<br>
              （1）<br>
              （2）<br>
              （3） <br>
              2. 具体实现<br>
              （1）<br>
              （2）<br>
              （3）<br>
              （4） <br>
              注意：<br>
            </el-tab-pane>
            <el-tab-pane label="导入/导出" name="seventh">
              1. 要点<br>
              （1）<br>
              （2）<br>
              （3） <br>
              2. 具体实现<br>
              （1）<br>
              （2）<br>
              （3）<br>
              （4）<br>
              注意：<br>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>

    <el-form label-width="90px" style="margin-bottom: 20px" class="search-form" ref="search_form" :model="searchForm"
      :rules="searchRules" size="small">
      <el-row :gutter="0">
        <el-col :span="6" :xs="6">
          <el-form-item prop="userName" label="数字输入">
            <el-input v-model="searchForm.userName"></el-input>
          </el-form-item>
          </el-form-item>
        </el-col>
        <el-col :span="6" :xs="6">
          <el-form-item prop="region" label="静态选框">
            <el-select v-model="searchForm.region" placeholder="请选择活动区域" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6" :xs="6">
          <el-form-item prop="region2" label="动态选框">
            <el-select v-model="searchForm.region2" placeholder="请选择活动区域" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6" :xs="6">
          <el-form-item prop="dateTime" label="单日期">
            <el-date-picker v-model="searchForm.dateTime" type="date" placeholder="选择日期" format="yyyy-MM-dd"
              value-format="yyyy-MM-dd" :picker-options="pickerOptions" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6" :xs="6">
          <el-form-item prop="dateTimeRange" label="双日期">
            <el-date-picker
                  v-model="searchForm.dateTimeRange"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  style="width: 100%;">
                </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item class="btn-search-content" align="right">
            <el-button type="primary" icon="el-icon-search" size="small" @click="searchHandle">查询</el-button>
            <el-button type="default" icon="el-icon-refresh" size="small" @click="searchReset">重置</el-button>
            <!-- <el-button type="primary" icon="el-icon-export" size="small" @click="handleExport">导出</el-button> -->
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>


    <el-row>
      <el-col :span="24">
        <div class="tool-box">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd">新增</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" @click="mulDelete">批量删除</el-button>
          <el-button type="success" icon="el-icon-caret-bottom" size="small" @click="importHandle">导入</el-button>
          <el-button type="Warning" icon="el-icon-caret-top" size="small" @click="exportHandle">导出</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table :data="
        userTable.slice(
          (userPagination.current - 1) * userPagination.size,
          userPagination.current * userPagination.size
        )
      " :row-key="getRowKeys" @selection-change="selectChange" style="width: 100%">
      <el-table-column :reserve-selection="true" type="selection" width="55"> </el-table-column>
      <el-table-column sortable prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column prop="phone" label="手机" width="150"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ scope.row.status ? "启用" : "禁用" }}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="userPagination.current" :page-sizes="[10, 20, 30, 50]" :page-size="userPagination.size"
      layout="total, sizes, prev, pager, next, jumper" :total="userPagination.total">
    </el-pagination>
    <el-dialog :title="dialogTitle" width="600px" :visible.sync="userFormVisible" @close="resetForm('userForm')">
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item label="姓名" prop="name" label-width="50px">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="50px">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="50px">
          <el-input v-model="user.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" label-width="50px">
          <el-date-picker v-model="user.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" label-width="50px">
          <el-switch v-model="user.status" active-color="#13ce66" inactive-color="#ff4949" :active-value="1"
            :inactive-value="0"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUser('userForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userTable: [],
        userPagination: {
          total: 0,
          size: 10,
          current: 1,
        },
        user: {
          id: "",
          date: "",
          name: "",
          phone: "",
          address: "",
          status: 0,
        },
        userBackup: Object.assign({}, this.user),
        multipleSelection: [],
        userFormVisible: false,
        dialogTitle: "",
        rowIndex: 9999,
        rules: {
          name: [{
              required: true,
              message: "请输入姓名",
              trigger: "blur"
            },
            {
              min: 2,
              max: 5,
              message: "长度在 2 到 5 个字符",
              trigger: "blur"
            },
          ],
        },
        activeName: "first",
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        searchForm: {

        },
        searchRules: {}
      };
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        this.loading = true;
        const params = {
          name: "jack",
          age: 15
        };
        this.$http("/api/users",{params})
          .then((res) => {
            if (res.data.code === "1") {
              this.userTable = res.data.users;
              this.userPagination = res.data.pagination;
            } else {
              this.$message.error(res.data.message);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      },
      handleEdit(index, row) {
        this.dialogTitle = "编辑";
        this.user = Object.assign({}, row);
        this.userFormVisible = true;
        this.rowIndex = index;
      },
      submitUser(formName) {
        console.log("aaaa");
        // 表单验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let id = this.user.id;
            if (id) {
              // id非空-修改
              this.users.splice(this.rowIndex, 1, this.user);
            } else {
              // id为空-新增
              this.user.id = this.users.length + 1;
              console.log(this.user);
              this.users.unshift(this.user);
            }
            this.userFormVisible = false;
            this.$message({
              type: "success",
              message: id ? "修改成功！" : "新增成功！",
            });
          }
        });
      },
      handleDelete(index, row) {
        this.$confirm(`确定删除用户 【${row.name}】 吗?`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
          .then(() => {
            this.users.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          })
          .catch(() => {
            console.log("取消删除");
          });
      },
      resetForm(formName) {
        // console.log("close监听");
        this.$refs[formName].clearValidate();
      },
      mulDelete() {
        let len = this.multipleSelection.length;
        if (len === 0) {
          this.$message({
            type: "warning",
            message: "请至少选择一项！",
          });
        } else {
          this.$confirm(`确定删除选中的 ${len} 个用户吗？`, "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
            })
            .then(() => {
              this.$message({
                type: "success",
                message: `成功删除了${len}条数据！`,
              });
            })
            .catch(() => {
              console.log("取消删除");
            });
        }
      },
      selectChange(val) {
        this.multipleSelection = val;
        console.log(val);
      },
      handleAdd() {
        this.dialogTitle = "新增";
        this.user = Object.assign({}, this.userBackup);
        this.userFormVisible = true;
      },
      // 每页显示多少条
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.userPagination.size = val;
      },
      handleCurrentChange(val) {
        this.userPagination.current = val;
        console.log(`当前页: ${val}`);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getRowKeys(row) {
        return row.id;
      },
      // 搜索查询
      searchHandle() {
      },
      // 搜索重置
      searchReset() {
        this.$refs["search_form"].resetFields();
        this.getUsers();
      },
      // 导入数据
      importHandle(){},
      // 导出表格
      exportHandle(){},
    },
  };
</script>

<style lang="scss" scoped>
  .user-box {
    width: 100%;

    .tool-box {
      padding: 10px 10px;
      border-bottom: 1px solid #eee;
    }

    .el-pagination {
      margin-top: 20px;
    }
  };
  .search-form el-col {
    margin-bottom: 30px;
  };
  .el-form-item{
    height: 45px;
  }
</style>
