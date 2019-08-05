import apollo from './apolloClient'
import gql from 'graphql-tag'

export default {
    async getPost(id) {
        const response = await apollo.query({

            query: gql`
            query post($id: ID!){
              post(id: $id) {
                article {
                  title,
                  content
                },
                tags {
                  id,
                  name
                }
              }
            }
            `,
            variables: {
              id: id
            }
        })  
        
        return response.data.Post;
    },
    async getPage(id) {
        const response = await apollo.query({

            query: gql`
            query Page($id: ID!){
              Page(id: $id) {
                article {
                  content,
                  title
                }
              }
            }
            `,
            variables: {
              id: id
            }
        })
    
        return response.data.page;
    },
    async getAllPages() {
        const response = await apollo.query({

            query: gql`
            query {
              pages {
                id
                icon,
                article {
                  title
                }
              }
            }
            `
          })
          return response.data.pages;
    },
    async getAllPosts(username, email, password) {
        const response = await apollo.query({
            query: gql`
            query {
              posts {
                id,
                article {
                  content,
                  title
                },
                tags {
                  name,
                  id
                }            
              }
            }
            `,
            variables: {
              username,
              password,
              email
            }
      })
      return response.data.posts;
    },
    async signup(username, email, password) {
      const response = await apollo.query({

          query: gql`
            mutation Signup(
                $username: String!,
                $email: String!,
                $password: String!
            ) {
              signup(
                name: $username,
                email: $email,
                password: $password
              ) {
                user {
                  id,
                  name
                }
              }
            }
          `, variables: {
            email,
            password,
            username
          }
    })
    return response.data.signup.user.name;
  },
  
  async login(email, password) {
    const response = await apollo.query({

      query: gql`
        mutation Login(
          $email: String!,
          $password: String!
        ){
          login(email: $email, password: $password) {
            token
          }
        }
      `,
      variables: {
        email,
        password
      }
    })
    return response.data.login.token;
  },

  async getMe() {
    const response = await apollo.query({

      query: gql`
        query {
          me {
            email,
            name,
            id
          }
        }
      `
    })
    return response.data.me;
  }
}