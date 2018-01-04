import React from 'react';

import { Flex, WhiteSpace, SearchBar, Icon, Grid } from 'antd-mobile';
import '../resource/styles/index.css';
import logo from '../resource/img/logo.svg';

const Item = Flex.Item;

const data  = [
    {
        icon : logo,
        text : '扫一扫'
    },
    {
        icon : logo,
        text : '付钱'
    },
    {
        icon : logo,
        text : '收钱'
    },
    {
        icon : logo,
        text : '卡包'
    },
    {
        icon : logo,
        text : '转账'
    },
    {
        icon : logo,
        text : '余额宝'
    },
    {
        icon : logo,
        text : '蚂蚁森林'
    },
    {
        icon : logo,
        text : 'logo'
    },
    {
        icon : logo,
        text : 'logo'
    },
    {
        icon : logo,
        text : 'logo'
    },
    {
        icon : logo,
        text : 'logo'
    },
    {
        icon : logo,
        text : 'logo'
    },
    {
        icon : logo,
        text : 'logo'
    },
];

class Index extends React.Component{
    render(){
        return(
            <div className="content">
                <Flex>
                    <Item>
                        <SearchBar placeholder="Search" maxLength={8} />
                    </Item>
                </Flex>
                <Grid data={data} isCarousel />
            </div>
        );
    }
}

export default Index;
