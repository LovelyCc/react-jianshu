import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import {actionCreators} from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    render() {
        const {showScroll} = this.props;
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img'
                             src="//upload.jianshu.io/admin_banners/web_images/4576/feab4469e6317fe3627d23d80fd6d0da09b556e3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                             alt=""/>
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
    showScroll: state.getIn(['home', 'showScroll'])
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
    }
});

export default connect(mapState, mapDispatch)(Home);