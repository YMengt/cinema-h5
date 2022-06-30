<template>
  <div class="wrap">
    <van-index-bar 
      highlight-color="#1989fa"
      :index-list="indexList">
      <div v-for="item in filterData" :key="item.letter">
        <van-index-anchor :index="item.letter"></van-index-anchor>
        <div   
          class="content"      
          v-for="row in item.list" 
          :key="row.value">{{row.label}}</div>
      </div>
    </van-index-bar> 
  </div>
</template>

<script>
export default {
  name:'test',
  data(){
    return {
      indexList:[], // 索引字符
      filterData:[], // 处理后的 待渲染数据
    }
  },
  methods:{
    test(){
      let mapData = [
        {
          label: '北京市',
          value: '110000',
        },{
          label: '天津市',
          value:'120000',
        },{
          label:'河北省',
          value:'130000',
        },{
          label:'山西省',
          value:'140000',
        },{
          label:'内蒙古自治区',
          value:'150000',
        },{
         label:'辽宁省',
         value:'210000',
        },{
          label:'吉林省',
          value:'220000',
        },{
         label:'黑龙江省',
         value:'230000',
        },{
          label:'上海市',
          value:'310000',
        },{
          label:'江苏省',
          value:'320000',
        },{
          label:'山东省',
          value:'370000',
        },{
          label:'河南省',
          value:'410000',
        },{
          label:'湖北省',
          value:'420000',
        },{
          label:'湖南省',
          value:'430000',
        },{
          label:'广东省',
          value:'440000'
        },{
          label:'广西壮族自治区',
          value:'450000',
        },{
          label:'海南省',
          value:'460000',
        },{
          label:'台湾省',
          value: '710000',
        },{
          label:'香港特别行政区',
          value:'810000',
        },{
          label:'澳门特别行政区',
          value:'820000',
        }
      ];
      // 安装使用 js-pinyin 插件，获取待处理字段的拼音
      const pinyin = require('js-pinyin');
      mapData.map(item => { item.pinyin = pinyin.getFullChars(item.label); });

      let provice = {};          
      mapData.map((item) => {         
        const Initials = item.pinyin[0].toUpperCase();      
        // 如果对象里有当前字母项则直接 push 一个对象,如果没有则创建一个新的键并赋值;     
        if (provice[Initials]) {     
          provice[Initials].push(item);       
        } else {     
          provice[Initials] = [item];      
        }       
      });
      // 将数据转为数组，并按字母顺利排列
      this.filterData = [];  
      for(let key in provice) {
        const obj = { letter: key, list:provice[key] };
        this.filterData.push(obj)
      }    
      this.filterData.sort((a,b) => { return a.letter.localeCompare(b.letter) });
      // 为索引字符数组赋值
      this.indexList = [];
      this.filterData.forEach(item => this.indexList.push(item.letter));
      console.log('filterData',this.filterData)
    },
  },
  mounted(){
    this.test();
  },
}
</script>

<style lang="scss" scoped>
.content{
  font-size: 15px;
  padding: 6px 0;
  border-bottom: 1px solid #eeeeee;
}
</style>
