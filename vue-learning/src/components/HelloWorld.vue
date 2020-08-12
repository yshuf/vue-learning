<template>
  <div class="hello">
    <h2>count:{{count}}</h2>
    <h2>ten times:{{$store.getters.tenTimesCount}}</h2>
    <button @click="addCountAsync(50)">add Count</button>
    <button @click="addCount(20)">add Count2</button>
    <vue-seamless-scroll
      :data="CardPartsStatisticsList"
      class="seamless-warp"
      :class-option="classOption"
    >
      <ul>
        <li
          class="DataList_top"
          v-for="(item,index) in CardPartsStatisticsList"
          :key="index"
          v-if="index < 5"
        >
          <!-- <div class="DataList_left">{{index+1}}</div> -->
          <div class="DataList_left">{{item.itemname}}</div>
          <div class="DataList_left">{{item.number}}</div>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: "HelloWorld",
  data () {
    return {
      msg: "Welcome to Your Vue.js App",
      CardPartsStatisticsList: [
        { itemname: '浙江有数', number: 5 },
        { itemname: '浙江有数', number: 4 },
        { itemname: '浙江有数', number: 3 },
        { itemname: '浙江有数', number: 2 },
        { itemname: '浙江有数', number: 1 },
      ]
    };
  },
  components: { vueSeamlessScroll },
  computed: {
    // ...mapState("counter", ["count"]),
    // ...mapGetters("counter", ["tenTimesCount"])
    count () {
      return this.$store.state.count;
    },

    classOption () {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  methods: {
    // ...mapMutations("counter", ["addCount"]),
    // ...mapActions("counter", ["addCountAsync"])
    addCount (num) {
      this.$store.commit("addCount", num);
    },
    addCountAsync (num) {
      this.$store.dispatch("addCountAsync", num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seamless-warp {
  width: 100%;
  height: calc(100% - 16px);
  overflow: hidden;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
