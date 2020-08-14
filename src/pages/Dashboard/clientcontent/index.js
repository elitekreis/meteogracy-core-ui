import React from 'react'
import { Form, Button, Input, Icon, Table } from 'antd'
import { connect } from 'react-redux'
import { REDUCER, createclient } from '../../../ducks/login'

import * as app from '../../../ducks/app'
const FormItem = Form.Item

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER],
})

@connect(mapStateToProps)
@Form.create()
class Clientcontent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      client: {},
      clients: [],
    }

    var self = this
    app.getclient(function(result) {
      var state = self.state
      state.clients = result
      self.setState(state)
    })
  }

  onSubmit = (isSubmitForm: ?boolean) => event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    if (!isSubmitForm) {
      form.validateFields((error, values) => {
        if (!error) {
          dispatch(createclient(values))
        }
      })
    }
  }

  render() {
    const tableColumns = [
      {
        title: 'ClientId',
        dataIndex: 'clientId',
        key: 'clientId',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Protocol',
        dataIndex: 'protocol',
        key: 'protocol',
      },
      {
        title: 'Authenticate Type',
        dataIndex: 'clientAuthenticatorType',
        key: 'clientAuthenticatorType',
      },
    ]

    const { form, isSubmitForm } = this.props
    return (
      <div>
        <div className="utils__title utils__title--flat mb-3">
          <span className="text-uppercase font-size-16">Organizations</span>
        </div>
        <div className="row">
          <Form layout="inline" hideRequiredMark onSubmit={this.onSubmit(isSubmitForm)}>
            <FormItem label="clientid">
              {form.getFieldDecorator('clientid', {
                initialValue: '',
                rules: [{ required: true, message: 'Please input your clientid' }],
              })(<Input size="default" />)}
            </FormItem>
            <FormItem label="name">
              {form.getFieldDecorator('name', {
                initialValue: '',
                rules: [{ required: true, message: 'Please input your name' }],
              })(<Input size="default" type="text" />)}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                className="width-150 mr-4"
                htmlType="submit"
                loading={isSubmitForm}
              >
                Create Client
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">Organizations</div>
                <div className="col-lg-6 utils__titleDescription">
                  Organization Clients From Keycloark
                </div>
                <div className="col-lg-6" />
              </div>
              <div className="card-body">
                <Table columns={tableColumns} dataSource={this.state.clients} pagination={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clientcontent
