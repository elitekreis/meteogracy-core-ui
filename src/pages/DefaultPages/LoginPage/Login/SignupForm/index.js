import React from 'react'
import { connect } from 'react-redux'
import { REDUCER, submit, signup } from 'ducks/login'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER],
})

@connect(mapStateToProps)
@Form.create()
class SignUpForm extends React.Component {
  static defaultProps = {}

  // $FlowFixMe
  onSubmit = (isSubmitForm: ?boolean) => event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    if (!isSubmitForm) {
      form.validateFields((error, values) => {
        if (!error) {
          dispatch(signup(values))
        }
      })
    }
  }

  render() {
    const { form, isSubmitForm } = this.props

    return (
      <div className="cat__pages__login__block__form">
        <h4 className="text-uppercase">
          <strong>Please log in</strong>
        </h4>
        <br />
        <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit(isSubmitForm)}>
          <FormItem label="First Name">
            {form.getFieldDecorator('firstname', {
              initialValue: '',
              rules: [{ required: true, message: 'Please input your firstname' }],
            })(<Input size="default" />)}
          </FormItem>

          <FormItem label="Last Name">
            {form.getFieldDecorator('lastname', {
              initialValue: '',
              rules: [{ required: true, message: 'Please input your lastname' }],
            })(<Input size="default" />)}
          </FormItem>

          <FormItem label="Username">
            {form.getFieldDecorator('username', {
              initialValue: '',
              rules: [{ required: true, message: 'Please input your username' }],
            })(<Input size="default" />)}
          </FormItem>
          <FormItem label="Password">
            {form.getFieldDecorator('password', {
              initialValue: '',
              rules: [{ required: true, message: 'Please input your password' }],
            })(<Input size="default" type="password" />)}
          </FormItem>
          <FormItem label="User Email">
            {form.getFieldDecorator('useremail', {
              initialValue: '',
              rules: [{ required: true, message: 'Please input your password' }],
            })(<Input size="default" type="email" />)}
          </FormItem>
          <div className="form-actions" style={{ marginLeft: '30%' }}>
            <Button
              type="primary"
              className="width-150 mr-4"
              htmlType="submit"
              loading={isSubmitForm}
            >
              SignUp
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default SignUpForm
