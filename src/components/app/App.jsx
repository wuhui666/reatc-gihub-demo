import React,{Component} from 'react'
import Component_add from "../component-add/component-add";
import Component_list from "../component-list/component-list";

export default  class App extends Component{

    state={

        comments:[
            {
                username:'Tom',
                content:'woooo~~~~'
            },
            {
                username:'Jane',
                content:'yo~~~~'
            }
        ]
    };

    addComment=(comment)=>{
        const {comments}=this.state;
        comments.unshift(comment);
        this.setState({comments});

    };
    delComment=(index)=>{
        const {comments}=this.state;
        comments.splice(index,1);//增删改都可以
        this.setState({comments});

    };
    render() {
        const {comments}=this.state;
        return (
            <div id='app-div'>
                <div id='title' className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <h1>==哈哈哈，有意思</h1>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Component_add addComment={this.addComment}/>
                    </div>
                    <div className='col-md-6'>
                        <Component_list comments={comments} delComment={this.delComment}/>
                    </div>

                </div>
            </div>
        )
    }
}