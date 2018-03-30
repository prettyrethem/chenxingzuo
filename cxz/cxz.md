##项目总结
    名称：717_program
    工具：react,fetch,node express,redux等...
    路由搭建：分为6个主路由，分别是  主页(index),详情页(detail),登陆页(login),
                                  注册页(resginer),搜索页(search)和搜索结果页(result)

            其中主页中包括4个子路由， 分别是首页(/index/home), 分类页(/index/classify), 
                                    购物车页(/index/shopcart)和我的页(/index/mine)



    commons中封装了dialog(购物车添加成功提示框)组件 goods(产品列表)组件 nav(导航)组件 router(路由)组件 swiper组件
    utils下用fetch方法封装了get/post请求方式和获取cookie的方法
    routers中封装了路由架子
    server中搭建了本地服务器，提供接口
    components封装了所需要的组件
    ...



    1.首页分为4部分：头部，banner模块，导航模块 和 产品列表
                    (1) 头部
                            一个input搜索框 点击跳转 搜索页
                            搜索页包括2部分： 头部(返回，input框，搜索)，最近搜索信息展示区
                                            点击返回，跳转到上一级路由，(history.goBack())
                                            input框内输入要搜索的信息，点击搜索，获取input框内输入的信息，
                                            调用history.push方法，并将获取到的信息传过去，同时跳转搜索结果页(result) 
                            搜索结果页包括3部分： 头部(返回)， 搜索信息展示区， 产品列表区
                                                点击返回，跳转到上一级路由，(history.goBack())
                                                搜索信息展示区展示搜索的结果
                                                产品列表区(下文会介绍)
                    (2) banner模块 
                           自己封装的swiper组件，由于下载的时候swiper总是快捷方式，引入不到样式，没有效果
                    (3) 导航模块
                           和下文的样式有些冲突，做了在src/components/mainbox/home/iconwrapper里，只是没有引用
                    (4) 产品列表
                           post方式掉后台接口‘/mall/index/getGoodsChannel’，传入相应的参数，获取线上数据并渲染到页面点击每一个产品，跳转对应的详情页，点击购物车跳转购物车页
    
    2.分类页分为2部分：左(导航)，右(产品列表)
                    post方式掉后台接口‘getClassify’，获取到数据进行渲染，点击左侧导航，右侧展示对应数据
    3.购物车页
        运用redux管理数据，添加2个字段conut和selected  count和selected的改变从而更新视图，
        selected改变值是0/1，0时不选中，1时选中。
        遇到一个问题，selected值会改变，但是图不会更新，
        解决方法是  export default connect(null,mapDispatchToProps,null,{pure:false})(CartItem)
        {pure:false}进行深层比较 默认为false 进行浅层比较
    4.我的页  




    登录页和注册页用于注册用户和登录    
                           

                        
                           
























