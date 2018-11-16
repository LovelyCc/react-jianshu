import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {
    DetailWrapper,
    Header,
    Conent
} from './style';

class Detail extends PureComponent {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Conent dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));