import { gql } from "@apollo/client";

//Blogs
export const CREATE_BLOG = gql`
mutation CreateBlogPost($title: String!, $content: String!, $coverPhoto: Upload!, $authorName: String!, $authorProfilePicture: Upload!, $categoryId: String!, $authorDesignation: String, $authorFacebookUrl: String, $authorInstagramUrl: String, $authorTwitterUrl: String, $authorLinkedinUrl: String) {
  CreateBlogPost(title: $title, content: $content, coverPhoto: $coverPhoto, authorName: $authorName, authorProfilePicture: $authorProfilePicture, categoryId: $categoryId, authorDesignation: $authorDesignation, authorFacebookURL: $authorFacebookUrl, authorInstagramURL: $authorInstagramUrl, authorTwitterURL: $authorTwitterUrl, authorLinkedinURL: $authorLinkedinUrl)
}
`

export const UPDATE_BLOG = gql`
mutation UpdateBlogPost($updateBlogPostId: Int!, $title: String!, $content: String!, $authorName: String!, $authorDesignation: String!, $authorFacebookUrl: String!, $authorInstagramUrl: String!, $authorTwitterUrl: String!, $categoryId: String!, $coverPhoto: Upload, $authorProfilePicture: Upload, $authorLinkedinUrl: String) {
  UpdateBlogPost(id: $updateBlogPostId, title: $title, content: $content, authorName: $authorName, authorDesignation: $authorDesignation, authorFacebookURL: $authorFacebookUrl, authorInstagramURL: $authorInstagramUrl, authorTwitterURL: $authorTwitterUrl, categoryId: $categoryId, coverPhoto: $coverPhoto, authorProfilePicture: $authorProfilePicture, authorLinkedinURL: $authorLinkedinUrl)
}
`

export const DELETE_BLOG = gql`
mutation DeleteBlogPost($deleteBlogPostId: Int!) {
  DeleteBlogPost(id: $deleteBlogPostId)
}
`

//Jobs
export const CREATE_JOB = gql`
mutation CreateJobPost($title: String!, $content: String!, $coverPhoto: Upload!, $authorName: String!, $authorProfilePicture: Upload!, $categoryId: String!, $jobTypeId: String!, $city: String!, $province: String!, $country: String!, $authorDesignation: String, $authorFacebookUrl: String, $authorInstagramUrl: String, $authorTwitterUrl: String, $authorLinkedinUrl: String) {
  CreateJobPost(title: $title, content: $content, coverPhoto: $coverPhoto, authorName: $authorName, authorProfilePicture: $authorProfilePicture, categoryId: $categoryId, jobTypeId: $jobTypeId, city: $city, province: $province, country: $country, authorDesignation: $authorDesignation, authorFacebookURL: $authorFacebookUrl, authorInstagramURL: $authorInstagramUrl, authorTwitterURL: $authorTwitterUrl, authorLinkedinURL: $authorLinkedinUrl)
}
`

export const UPDATE_JOB = gql`
mutation UpdateJobPost($updateJobPostId: Int!, $title: String!, $content: String!, $authorName: String!, $authorDesignation: String!, $authorFacebookUrl: String!, $authorInstagramUrl: String!, $authorTwitterUrl: String!, $categoryId: String!, $jobTypeId: String!, $city: String!, $province: String!, $country: String!, $coverPhoto: Upload, $authorProfilePicture: Upload, $authorLinkedinUrl: String) {
  UpdateJobPost(id: $updateJobPostId, title: $title, content: $content, authorName: $authorName, authorDesignation: $authorDesignation, authorFacebookURL: $authorFacebookUrl, authorInstagramURL: $authorInstagramUrl, authorTwitterURL: $authorTwitterUrl, categoryId: $categoryId, jobTypeId: $jobTypeId, city: $city, province: $province, country: $country, coverPhoto: $coverPhoto, authorProfilePicture: $authorProfilePicture, authorLinkedinURL: $authorLinkedinUrl)
}
`

export const DELETE_JOB = gql`
mutation DeleteJobPost($deleteJobPostId: Int!) {
  DeleteJobPost(id: $deleteJobPostId)
}
`