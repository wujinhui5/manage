<template>
  <div class="my-calendar">
    <el-row class="header">
      <el-col :span="2" :offset="1">
        <i class="el-icon-arrow-left" @click="lastMonth"></i>
      </el-col>
      <el-col :span="18">
        <div class="year">{{ currentYear }}</div>
        <div class="month">{{ currentMonth }}</div>
      </el-col>
      <el-col :span="2">
        <i class="el-icon-arrow-right" @click="nextMonth"></i>
      </el-col>
    </el-row>

    <ul class="week">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
      <li>日</li>
    </ul>
    <ul class="day" ref="day">
      <li v-for="(item, index) in days" :key="index" @click="pitchDate(index)">
        <div v-if="item.day.getMonth() + 1 != currentMonth" class="other-month">
          {{ item.day.getDate() }}
        </div>

        <div
          v-else-if="
            item.day.getYear() === new Date().getYear() &&
            item.day.getMonth() === new Date().getMonth() &&
            item.day.getDate() === new Date().getDate()
          "
          class="current-day"
        >
          {{ item.day.getDate() }}
        </div>

        <div v-else class="current-month-other-day">
          {{ item.day.getDate() }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDay: 1,
      currentWeek: 1,
      currentMonth: 1,
      currentYear: 1970,
      days: [],
    };
  },

  methods: {
    // 生成日历的数据
    getDateData(dateStr) {
      let date;
      if (dateStr) {
        date = new Date(dateStr);
      } else {
        date = new Date();
      }
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;
      this.currentDay = date.getDate();
      this.currentWeek = date.getDay() === 0 ? 7 : date.getDay();

      function getDays(week, date) {
        let ans = [];

        function getLastDay(week, date) {
          let currentMonth = 1;
          let i = 0;
          while (week != 7 || currentMonth != 0) {
            let d = new Date(date);
            let dayObj = {};
            let day = d.getDate() - i;
            d.setDate(day);
            dayObj.day = d;

            ans.unshift(dayObj);
            if (day === 1) {
              currentMonth = 0;
            }
            week = week === 1 ? 7 : week - 1;
            i++;
          }
        }

        function getFormatDay(week, date) {
          let currentMonth = 1;
          let j = 1;
          var d = new Date(date);
          d.setDate(d.getDate() + j);
          while (week != 7 || currentMonth != 2) {
            let dayObj = {};
            dayObj.day = d;
            ans.push(dayObj);

            d = new Date(date);
            j++;
            d.setDate(d.getDate() + j);

            if (d.getDate() === 1) {
              currentMonth = 2;
            }
            week = week === 7 ? 1 : week + 1;
          }
        }
        getLastDay(week, date);
        getFormatDay(week, date);
        return ans;
      }

      this.days = getDays(
        this.currentWeek,
        this.formatDate(this.currentYear, this.currentMonth, this.currentDay)
      );
    },

    // 格式化日期
    formatDate(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },

    // 切换上一个月
    lastMonth() {
      let li = this.$refs.day.querySelectorAll("li");
      for (let i = 0; i < li.length; i++) {
        li[i].className = "";
      }
      if (this.currentMonth === 1) {
        this.getDateData(this.formatDate(this.currentYear - 1, 1, 1));
      } else {
        this.getDateData(
          this.formatDate(this.currentYear, this.currentMonth - 1, 1)
        );
      }
    },

    // 切换上一个月
    nextMonth() {
      let li = this.$refs.day.querySelectorAll("li");
      for (let i = 0; i < li.length; i++) {
        li[i].className = "";
      }
      if (this.currentMonth === 12) {
        this.getDateData(this.formatDate(this.currentYear + 1, 1, 1));
      } else {
        this.getDateData(
          this.formatDate(this.currentYear, this.currentMonth + 1, 1)
        );
      }
    },

    // 切换选中日期
    pitchDate(i) {
      // 清空切换前选中日期的样式
      let li = this.$refs.day.querySelectorAll("li");
      for (let i = 0; i < li.length; i++) {
        li[i].className = "";
      }
      // 如果新选中的不是当前月份的日期，则切换月份
      let week = this.days[i].day.getDay();
      if (
        this.days[i].day.getMonth() - this.currentMonth === -2 ||
        this.days[i].day.getMonth() - this.currentMonth === 10
      ) {
        this.lastMonth();
        this.$nextTick(() => {
          let li = this.$refs.day.querySelectorAll("li");
          let place = week === 0 ? -1 : week - 8;
          li[li.length + place].className = "active-day";
        });
      } else if (
        this.days[i].day.getMonth() - this.currentMonth === 0 ||
        this.days[i].day.getMonth() - this.currentMonth === -12
      ) {
        this.nextMonth();
        this.$nextTick(() => {
          let li = this.$refs.day.querySelectorAll("li");
          let place = week === 0 ? 6 : week - 1;
          li[place].className = "active-day";
        });
      } else {
        // 如果新选中的日期是当前月
        li[i].className = "active-day";
      }
    },
  },

  mounted() {
    this.getDateData("");
  },
};
</script>

<style scoped>
.my-calendar {
  font-size: 14px;
  overflow: hidden;
  border: 1px solid #888;
  border-radius: 5px;
  box-shadow: 2px 2px 5px;
}

.header {
  background: #409eff;
  font-size: 20px;
  color: #fff;
}

.header .el-col {
  height: 60px;
}

.header .year,
.header .month {
  height: 30px;
  line-height: 30px;
}

.header .el-icon-arrow-left,
.header .el-icon-arrow-right {
  line-height: 60px;
  cursor: pointer;
}

.week {
  height: 20px;
  line-height: 20px;
  background: #409eff;
}

.week li {
  float: left;
  width: 14.28%;
}

.day li {
  float: left;
  width: 14.28%;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

.day li .other-month {
  color: #999;
}

.day li .current-day {
  background: #409eff;
  color: #fff;
}

.day .active-day {
  background: #999;
  color: #fff;
}
</style>