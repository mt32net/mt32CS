import apollo from './apolloClient'
import gql from 'graphql-tag'

export default {
    async getPost(id) {
        const response = await apollo.query({

            query: gql`
            query post($id: ID!){
              post(id: $id) {
                createdAt,
                id,
                article {
                  title,
                  content
                },
                tags {
                  id,
                  name
                },
                comments {
                  id,
                  content,
                  author {
                    name
                  },
                  createdAt
                },
                author {
                  name
                }
              }
            }
            `,
            variables: {
              id: id
            }
        })  
        
        return response.data.post;
    },
    async getPage(id) {
        const response = await apollo.query({

            query: gql`
            query Page($id: ID!){
              page(id: $id) {
                article {
                  content,
                  title
                },
                icon
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
                },
                createdAt,
                author {
                  name
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
      const response = await apollo.mutate({

          mutation: gql`
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
    const response = await apollo.mutate({
      
      mutation: gql`
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
            id,
            creator
          }
        }
      `
    })
    return response.data.me;
  },

  async comment(postid, content) {
    const response = await apollo.mutate({
      
      mutation: gql`
        mutation createComment(
          $postid: ID!,
          $content: String!
        ){
          createComment(postid: $postid, content: $content) {
            id
          }
        }
      `,
      variables: {
        postid,
        content
      }
    })
    return response.data.id;
  },

  async createDraft(content, title) {
    const response = await apollo.mutate({
      
      mutation: gql`
        mutation createDraft(
          $content: String!,
          $title: String!
        ){
          createDraft(
            content: $content,
            title: $title
          ) {
            id
          }
        }
      `,
      variables: {
        title,
        content
      }
    })
    return response.data.createDraft.id;
  },

  async publish(id) {
    const response = await apollo.mutate({
      
      mutation: gql`
        mutation publish(
          $id: ID!
        ){
          publish(
            id: $id
          ) {
            article {
              title
            }
          }
        }
      `,
      variables: {
        id: id
      }
    })
    return response.data.id;
  }
}