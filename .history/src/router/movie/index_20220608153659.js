export default{
    path:'/movie',
    component:()=>import('@/views/Movie'),
    children:[
        {
            path:"nowPlaying",
            name:'NowPlaying',
            component:()=>import('@/components/NowPlaying'),
        },    
        {
            path:"comingSoon",
            name:'ComingSoon',
            component:()=>import('@/components/ComingSoon'),
        },
       
    ]
}