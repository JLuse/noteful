import React from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>An Error Occured</h1>
    } else {
      return this.props.children
    }
  }
}

ErrorBoundary.propTypes = {
  // node - We can pass anything that can be rendered, such as numbers, string, DOM elements, arrays, or fragments 
  children: PropTypes.node.isRequired
}