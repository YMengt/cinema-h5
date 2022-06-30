export default{
    path:'/movie',
    component:()=>import('@/views/Movie'),
    children:[
        {
            path:"nowPlaying",
            name:'NowPlaying',
            component:()=>import('@/components/NowPlaying'),
            meta:{type:'movie'}
        },    
        {
            path:"comingSoon",
            name:'ComingSoon',
            component:()=>import('@/components/ComingSoon'),
            meta:{type:'movie'}

        },
       
    ]
}