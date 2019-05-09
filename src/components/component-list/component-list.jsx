import React,{Component} from 'react'
import '../component-item/component-item'
import Component_item from "../component-item/component-item";
import PropTypes from 'prop-types'

import './list.css'
export default  class Component_list extends Component{

    /*类添加propTypes加staic*/
    static propTypes={
        comments:PropTypes.array.isRequired,
        delComment:PropTypes.func.isRequired
    };

    render() {
        const {comments,delComment}=this.props;
        const display=comments.length===0?'block':'none';
        return (
            <ul>
                <li id='msg'>回复：</li>
                <li style={{display}}>暂无评论。。。。。</li>
                {comments.map((item,index)=><Component_item comment={item} key={index} delComment={delComment} index={index}/>)}
            </ul>
        )
    }
}