import React from 'react';
import {connect} from 'dva';
import {Row, Col, Form, Icon, Input, Button, Checkbox} from 'antd';
import styles from './LoginPage.scss';

const FormItem = Form.Item;


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dispatch = this.props.dispatch;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('收到值: ', values);
        this.dispatch({type: 'login/login'});
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          {/*<img alt={'logo'} src={config.logo} />*/}
          <span >AdminSystem</span>
        </div>
        <Row type="flex" justify="center">
          <Col span={20}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{required: true, message: "请输入用户名"}]
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                         placeholder="用户名"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: "请输入密码"}]
                })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                         placeholder="密码"/>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>);
  };
}

LoginPage.propTypes = {};

export default connect()(Form.create()(LoginPage));

