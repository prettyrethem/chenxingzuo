import React, {Component} from 'react'
class Swiper extends Component {
    render () {
        const { imgList } = this.props
        return (
            <div className='swiper-container' ref='swiperDom'>
               <div className="swiper-wrapper">
                  <div className="swiper-slide"><img src={require('../static/img/banner (1).jpg')} alt=""/></div>
                  {/* <div className="swiper-slide"><img src={require('../static/img/banner (2).jpg')} alt=""/></div>
                  <div className="swiper-slide"><img src={require('../static/img/banner (3).jpg')} alt=""/></div>
                  <div className="swiper-slide"><img src={require('../static/img/banner (4).jpg')} alt=""/></div>
                  <div className="swiper-slide"><img src={require('../static/img/banner (5).jpg')} alt=""/></div>
                  <div className="swiper-slide"><img src={require('../static/img/banner (6).jpg')} alt=""/></div>
                  <div className="swiper-slide"><img src={require('../static/img/banner (7).jpg')} alt=""/></div>
                  <div className="swiper-slide"><img src={require('../static/img/banner (8).jpg')} alt=""/></div> */}
                  {/* {
                      imgList.map((item, idx) => {
                          return (
                              <div className="swiper-slide"><img src={item.src} alt=""/></div>
                          )
                      })
                  } */}
               </div>
            </div>
        )
    }
    componentDidMount () {
        new Swiper (this.refs.swiperDom,{
            autoplay:true,
            loop:true
        })
    }
}

export default Swiper