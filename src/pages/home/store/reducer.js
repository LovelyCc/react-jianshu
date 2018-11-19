import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false,
    bannerList: [],
    isHover: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList),
        writerList: fromJS(action.writerList),
        bannerList: fromJS(action.bannerList)
    });
};

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        case constants.MOUSE_ENTER:
            return state.set('isHover', true);
        case constants.MOUSE_LEAVE:
            return state.set('isHover', false);
        default:
            return state;
    }
}