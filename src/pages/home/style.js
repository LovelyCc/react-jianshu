import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 6px;
    }
`;

export const BannerWrapper = styled.div`
    width: 100%;
    height: 270px;
    position: relative;
    .btn-go {
        
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    .ad-img {
        display: block;
        width: 100%;
        height: 160px;
        border-radius: 4px;
        margin-top: 30px;
    }
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    .topic-pic {
        display: block;
        float: left;
        margin-right: 10px;
        width: 32px;
        height: 32px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    padding-top: 30px;
    width: 280px;
    margin-top: -4px;
`;

export const RecommendItem = styled.a`
    display: block;
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    .recommend-img {
        width: 280px;
        min-height: 50px;
    }
`;

export const DownloadWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    margin-top: 10px;
    .qrcode-img {
        width: 60px;
        height: 60px;
        opacity: .85;
    }
    .download-info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 12px;
        .download-title {
            font-size: 15px;
            color: #333;
        }
        .download-desc {
            margin-top: 8px;
            font-size: 13px;
            color: #999;
        }
    }
`;

export const WriterWrapper = styled.div`
    width: 100%;
    font-size: 13px;
    margin-top: 20px;
`;

export const WriterTitle = styled.div`
    overflow: hidden;
    .writer-title {
        float: left;
        font-size: 14px;
        color: #969696;
    }
    .icon-btn {
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
        .iconfont {
            font-size: 13px;
            margin-right: 2px;
        }
    }
`;

export const WriterItem = styled.div`
    margin-top: 15px;
    line-height: 20px;
    .writer-header {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
    }
    
    .favo-writer{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    
    .writer-name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
    }
    
    .writer-info {
        margin-top: 4px;
        font-size: 12px;
        color: #969696;
    }
`;

export const ShowWriter = styled.div`
    box-sizing: border-box;
    padding: 10px 0;
    width: 100%;
    margin-top: 20px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;