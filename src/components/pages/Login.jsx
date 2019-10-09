/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { PwaInstaller } from '../widget';
import { connect } from 'react-redux';
import { loginIn } from '../../redux/user/Action';
const FormItem = Form.Item;

@connect((state, props) =>{
    console.log(state, props)
    return {}
})
class Login extends React.Component {
    onLogin=()=>{
        this.props.dispatch(loginIn({ url: '', params: {} }, (status) => {
            this.props.history.push({ pathname: '/app/dashboard/index'});
        }));
    }
    render() {

        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>React Admin</span>
                        <PwaInstaller />
                    </div>
                    <Form style={{maxWidth: '300px'}}>
                        <FormItem>

                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                        </FormItem>
                        <FormItem>
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                        </FormItem>
                        <FormItem>
                                <Checkbox>记住我</Checkbox>
                            <span className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</span>
                            <Button type="primary" onClick={()=> { this.onLogin() }} className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            <p style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span >或 现在就去注册!</span>
                            </p>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Login;
