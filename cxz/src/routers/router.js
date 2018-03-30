import Home from '../components/mainbox/home'
import Classify from '../components/mainbox/classify'
import Mine from '../components/mainbox/mine'
import Shopcart from '../components/mainbox/shopcart'
import Mainbox from '../components/mainbox'
import Login from '../components/login'
import Detail from '../components/detail'
import Search from '../components/search'
import Resginer from '../components/resginer'
import Result from '../components/result'

const router = {
    routerItem : [
        {
            path: '/index',
            component: Mainbox,
            exact:true,
            children: [
                {
                    path: '/index/home',
                    component: Home,
                    tit: '首页'
                },
                {
                    path: '/index/classify',
                    component: Classify,
                    tit: '分类'                    
                },
                {
                    path: '/index/shopcart',
                    component: Shopcart,
                    tit: '购物车'                    
                },
                {
                    path: '/index/mine',
                    component: Mine,
                    tit: '我的',
                    autherization:true                    
                }
            ]
        },
        {
            path: '/detail',
            component: Detail
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/result',
            component: Result
        },
        {
            path: '/resginer',
            component: Resginer
        }
    ]
}

export default router