import styled from 'styled-components'
import logoPic from '../../static/header/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: 100%;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a
    }
    &.logout {
        cursor: pointer;
    }
`
export const NavSearchWrapper = styled.span`
    position: relative;
    .iconfont {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #999;
        &.focused {
            display: flex;
            align-items: center;
            justify-content: center;
            right: 5px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            color: #fff;
            background: #999;
        }
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 40px;
    width: 240px;
    min-height: 100px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
`
export const SearchInfoList = styled.div``
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 2px;
    cursor: pointer;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 11px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 15px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 280px;
    }
    &.slider-enter {
        transition: all .3s ease-in;
    }
    &.slider-enter-active {
        width: 280px;
    }
    &.slider-exit {
        transition: all .3s ease-out;
    }
    &.slider-exit-active {
        width: 160px;
    }
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 11px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border 1px solid #ec6149;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`
