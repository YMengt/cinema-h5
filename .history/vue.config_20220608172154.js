// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import {VueAmapResolver} from '@vuemap/unplugin-resolver'


//webpack打包时会读到，webpack用到commonjs标准
module.exports={
    // linOnSave:false,//如果用了eslint,
    pages:{
        index:{//页面主页,有了index就必须有entry等
            entry: 'src/main.js',
            filename: 'index.html',
            title: '卖座电影',
        },
        
    },
    css:{
        loaderOptions: {
            // 给 sass-loader 传递选项,默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            sass: {
              // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
              prependData: `@import "@/assets/css/common.scss";`
            },
        }   
    },
    // plugins: [
    //     vue(),
    //     AutoImport({
    //       resolvers: [VueAmapResolver()],
    //     }),
    //     Components({
    //       resolvers: [VueAmapResolver()],
    //     }),
    //   ]

}