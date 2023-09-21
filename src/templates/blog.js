import {graphql} from "gatsby";
import React from 'react';
export default function Blog(props) {
    console.log(props)
    return <div>{JSON.stringify(props)}</div>
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
   }
}
`
