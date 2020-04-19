import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/particles/Layout'

const CreatePost = props => {

  const { content, title } = props.pageContext

  return (
    <Layout>
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default CreatePost
