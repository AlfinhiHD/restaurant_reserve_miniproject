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

export const PostReserve = gql`
mutation MyMutation($object: reservation_insert_input!) {
  insert_reservation_one(object: $object) {
    reservation_id
  }
}
`;

export const GetReservationData = gql `
query MyQuery($userid: String) {
  reservation(where: {userid: {_eq: $userid}}) {
    date
    menu_id
    notes
    person
    reservation_id
    reserve_name
    time
    userid
  }
}
`;

