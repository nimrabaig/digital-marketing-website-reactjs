import { gql } from "@apollo/client"

//Blogs
export const GET_BLOGS = gql`
query Query($skip: Int, $take: Int, $categoryId: String) {
  AllBlogPosts(skip: $skip, take: $take, categoryId: $categoryId)
}
`

export const GET_BLOG = gql`
query Query($viewBlogPostId: Int!) {
  ViewBlogPost(id: $viewBlogPostId)
}
`

export const BLOG_CATEGORY_DD = gql`
query Query {
  DropdownCategory
}
`

//Jobs
export const GET_JOBS = gql`
query Query($skip: Int, $take: Int) {
  AllJobPosts(skip: $skip, take: $take)
}
`

export const GET_JOB = gql`
query Query($viewJobPostId: Int!) {
  ViewJobPost(id: $viewJobPostId)
}
`

export const JOB_CATEGORY_DD = gql`
query Query {
  DropdownJobType
}
`