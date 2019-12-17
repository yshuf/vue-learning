<template>
	<div class="hello">
		<h2>count:{{ count }}</h2>
		<h2>ten times:{{tenTimesCount}}</h2>
		<button @click="addCountAsync(50)">add Count</button>
		<button @click="addCount(20)">add Count2</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
	name: "HelloWorld",
	data() {
		return {
      msg: "Welcome to Your Vue.js App",
      count
		};
	},
	computed: {
		// ...mapState("counter", ["count"]),
		// ...mapGetters("counter", ["tenTimesCount"])
	},
	methods: {
		// ...mapMutations("counter", ["addCount"]),
    // ...mapActions("counter", ["addCountAsync"])
    addCount(num){
      this.$store.commit('addCount',num);
    },
    addCountAsync(num){
      this.$store.dispatch('addCountAsync',num)
    }
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,h2 {
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
