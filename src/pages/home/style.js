import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner {
        display: inline-block;
        width: 625px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -20px;
    // border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    margin-left: 20px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    overflow: hidden;
    .icon {
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`
export const ListWrapper = styled.div``

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .img {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`
export const ItemInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 4px;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
        margin-bottom: 8px;
    }
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${(props) => props.img});
    background-size: contain;
`
export const MoreBtn = styled.div`
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    border-radius: 15px;
    cursor: pointer;
    background-color: #eee;
`

export const GoTop = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #eee;
    cursor: pointer;
`
