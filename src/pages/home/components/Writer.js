import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    WriterWrapper,
    WriterTitle,
    WriterItem,
    ShowWriter
} from '../style';

class Writer extends PureComponent {
    render() {

        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span className='writer-title'>推荐作者</span>
                    <div className='icon-btn'>
                        <i className="iconfont">&#xe851;</i>
                        换一批
                    </div>
                </WriterTitle>
                <div>
                    {
                        list.map((item) => (
                            <WriterItem key={item.get('id')}>
                                <img
                                    className='writer-header'
                                    src={item.get('imgUrl')}
                                    alt=""/>
                                <span className='favo-writer'>+关注</span>
                                <p className='writer-name'>{item.get('name')}</p>
                                <p className='writer-info'>{item.get('info')}</p>
                            </WriterItem>
                        ))
                    }
                </div>
                <ShowWriter>
                    查看全部
                </ShowWriter>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
});

export default connect(mapState, null)(Writer);