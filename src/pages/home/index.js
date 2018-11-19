import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {Carousel} from 'antd';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
    BannerWrapper,
    BannerBtn
} from './style';

class Home extends PureComponent {
    render() {
        const {showScroll, bannerList, isHover, mouseEnter, mouseLeave} = this.props;
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <BannerWrapper
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                        >
                            <CSSTransition
                                in={isHover}
                                timeout={200}
                                classNames="fade"
                            >
                                <BannerBtn className='btn-go go-left' onClick={() => {this.carouselRef.prev()}}><i
                                    className="iconfont my-icon">&#xe617;</i></BannerBtn>
                            </CSSTransition>
                            <CSSTransition
                                in={isHover}
                                timeout={200}
                                classNames="fade"
                            >
                                <BannerBtn className='btn-go go-right' onClick={() => {this.carouselRef.next()}}><i
                                    className="iconfont my-icon">&#xe638;</i></BannerBtn>
                            </CSSTransition>

                            <Carousel autoplay ref={(carouselRef) => { this.carouselRef = carouselRef}}>

                                {
                                    bannerList.map((item) => {
                                        return <div key={item.get('id')}>
                                            <img className='banner-img'
                                                 src={item.get('imgUrl')}
                                                 alt=""
                                            />
                                        </div>
                                    })
                                }
                            </Carousel>
                        </BannerWrapper>

                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <DownloadApp/>
                        <img className='ad-img'
                             src="https://oimagec2.ydstatic.com/image?id=2453834267820195139&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60"
                             alt=""/>
                        <Writer/>
                    </HomeRight>
                    {showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
                </HomeWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }
}


const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll']),
    bannerList: state.getIn(['home', 'bannerList']),
    isHover: state.getIn(['home', 'isHover']),
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 300) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    },

    mouseEnter() {
        dispatch(actionCreators.mouseEnter());
    },

    mouseLeave() {
        dispatch(actionCreators.mouseLeave());
    }
});

export default connect(mapState, mapDispatch)(Home);