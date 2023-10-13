import { gql } from "@apollo/client";

//Contact us
export const CONTACT_US = gql`
mutation ContactUs($name: String!, $email: String!, $company: String!, $subject: String!, $message: String!, $phoneNumber: String) {
  ContactUs(name: $name, email: $email, company: $company, subject: $subject, message: $message, phone_number: $phoneNumber)
}
`