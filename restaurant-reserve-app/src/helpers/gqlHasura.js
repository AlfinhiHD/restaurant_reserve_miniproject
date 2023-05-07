import { gql } from "@apollo/client"

export const AddUser = gql`
  mutation MyMutation($object: user_insert_input!) {
    insert_user_one(object: $object) {
      userid
      username
    }
  }
`;

export const UserLogin = gql`
query MyQuery($email: String!, $password: String!) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      userid
      username
      usertoken
    }
  }
`;

export const GetMenuData = gql`
query MyQuery {
  menu {
    image
    menu_id
    menu_name
    price
  }
}
`;

export const GetSelectMenu = gql`
query MyQuery($menu_id: String) {
  menu(where: {menu_id: {_eq: $menu_id}}) {
    image
    menu_id
    menu_name
    price
  }
}
`;

// export const GetSearchMenu = gql`
// query MyQuery(
//   $name: String, $productname: String, $productcategory: String, $limit: Int!, $offset: Int!
//   ) {
//   menu(where: {
//     productcategory: {_ilike: $productcategory}, 
//     productname: {_ilike: $productname}},
//     limit: $limit
//     offset: $offset
//     ) {
//     menu_id
//     productcategory
//     productimage
//     productname
//     productprice
//   }
// }`;

// export const GetQtyMenu = gql`
// query MyQuery(
//   $menu_id: String, $userid: String
//   )  {
//   cart(where: {menu_id: {_eq: $menu_id}, userid: {_eq: $userid}}) {
//     quantity
//   }
// }
// `;


