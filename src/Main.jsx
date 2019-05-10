import React,{Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import './main.css'
export default  class Main extends Component{
    state={
        users:null,
        error:null,
        loading:false,
        init:true
    };

    static propTypes={
        keyWord:PropTypes.string.isRequired
    };
    /*当继承的属性在父组件更新了，本组件随之刷新属性之前*/
    componentWillReceiveProps(newProps){
        const {keyWord}=newProps;

        this.setState({loading:true,init:false});
        axios.get(`https://api.github.com/search/users?q=${keyWord}`)
            .then(response=>{

                const result=response.data;
                /*根据github返回的item对象数组找到你要的属性赋值*/
                const users=result.items.map(item=>({
                    avatarUrl:item.avatar_url,
                    userUrl:item.html_url,
                    username:item.login
                }));
                this.setState({users,loading:false})
                /*change state*/

            })
            .catch(error=>{
                this.setState({error:error.message,loading:false})
            })

    }
    render() {
        const {users,error,loading,init}=this.state;

        if (init){
            return (
                <div>
                    上方输入查找.....
                </div>
            )
        }
        else if(loading){
            return (
                <div>
                    Loading.....
                </div>
            )
        }
        else if(error){/*有错提示下*/
            return (
                <div>
                    {error}
                </div>
            )
        }
        else{

            return (
                <div>
                    {users.map((item,index)=>(
                        <div className='card' key={index} style={{display:'inline-block'}}>
                            <a href={item.userUrl}>
                                <img src={item.avatarUrl} alt='logo' style={{height:200,width:200}}/>
                            </a>
                            <p>{item.username}</p>
                        </div>
                    ))}
                </div>
            )
        }

    }
}