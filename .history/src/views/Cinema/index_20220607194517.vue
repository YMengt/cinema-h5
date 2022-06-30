<template>
    <div>
        <Header title="喵喵影院"></Header>
        <div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-jiantouxia"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-jiantouxia"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-jiantouxia"></i>
				</div>
			</div>
			<div class="cinema_body">
				<ul>
					<li>
						<div>
							<span>大地影院(澳东世纪店)</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>金州区大连经济技术开发区澳东世纪3层</span>
							<span>1763.5km</span>
						</div>
						
					</li>
				</ul>
			</div>
		</div>

        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
    export default {
         name:'Cinema',
        components:{Header,TabBar},
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }

</style>