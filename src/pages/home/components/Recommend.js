import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    RecommendItem,
    RecommendWrapper
} from '../style';

class Recommend extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => (
                        <RecommendItem key={item.get('id')}>
                            <img className='recommend-img'
                                 src={item.get('imgUrl')} alt=""/>
                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);