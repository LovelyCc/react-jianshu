import React, {PureComponent} from 'react';
import {
    DownloadWrapper,
} from '../style';

class DownloadApp extends PureComponent{
    render() {
        return (
            <DownloadWrapper>
                <img className='qrcode-img' src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                <div className='download-info'>
                    <p className='download-title'>下载简书手机App</p>
                    <p className='download-desc'>随时随地发现和创作内容</p>
                </div>
            </DownloadWrapper>
        )
    }
}

export default DownloadApp;