import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Clientcontent from '../clientcontent'
class ClientPage extends React.Component {
  static defaultProps = {
    pathName: 'Organization Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Organization Page" />
        <Clientcontent />
      </Page>
    )
  }
}

export default ClientPage
