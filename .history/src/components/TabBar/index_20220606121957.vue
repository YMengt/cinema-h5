<template>
    <div>
        <footer id="footer">
			<ul>
				<li>
				<router-link  to="/movie" active-class="active">
					<i class="iconfont icon-dianyingyuan"></i>
					<p>电影</p>
				</router-link>
				</li>
				<li>
				<router-link  to="/cinema" active-class="active">
					<i class="iconfont icon-yingyuan"></i>
					<p>影院</p>
				</router-link>
				</li>
				<li>
				<router-link  to="/message" active-class="active">
					<i class="iconfont icon-zixun"></i>
					<p>咨询</p>
				</router-link>
				</li>
				<li>
				<router-link  to="/mine" active-class="active">
					<i class="iconfont icon-wode"></i>
					<p>我的</p>
				</router-link>
				</li>
			</ul>
		</footer>
    </div>
</template>

<script>
    export default {
        name:'TabBar',
        
    }
</script>

<style lang="scss" scoped>
#footer{ 
	width:100%; 
	height:50px;
	 background: white; 
	 border-top:2px #ebe8e3 solid;
	  position: fixed; 
	  left: 0; 
	  bottom:0;
	ul{ 
		display: flex; 
		text-align: center;
		height:50px;
		align-items:center;
		justify-content: space-around;
		li{
			 height:40px;
			
			i{ 
				font-size: 20px;
			}
			p{ 
				font-size: 12px;
				line-height: 18px;
			}
		}
		 li.active{ color: #f03d37;}
	}
		
		
}
</style>