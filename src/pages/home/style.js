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
    width: 240px;
    float: right;
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -20px;
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