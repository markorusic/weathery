import React from 'react'

const withLoading = Component => ({ isLoading, ...props }) => {
  if (isLoading) {
    return (<h1>Loading...</h1>)
  }
  return (
    <Component {...props} />
  )
}

export default withLoading
