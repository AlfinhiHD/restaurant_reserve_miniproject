import { gql } from "@apollo/client"

export const AddUser = gql`
  mutation MyMutation($object: user_insert_input!) {
    insert_user_one(object: $object) {
      userid
      username
    }
  }
`;

export const UserLogin = gql `
query MyQuery($email: String!, $password: String!) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      username
      usertoken
    }
  }
`;
