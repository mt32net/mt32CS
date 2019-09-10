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
                },
                description
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
                  title
                },
                tags {
                  name,
                  id
                },
                createdAt,
                author {
                  name
                },
                description  
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

  async createDraft(content, title, tags, description) {
    const response = await apollo.mutate({
      
      mutation: gql`
        mutation createDraft(
          $content: String!,
          $title: String!,
          $tags: [ID!],
          $description: String!
        ){
          createDraft(
            content: $content,
            title: $title,
            tags: $tags,
            description: $description
          ) {
            id,
            description
          }
        }
      `,
      variables: {
        title,
        content,
        tags,
        description
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
  },

  async getTags() {
    const response = await apollo.query({

      query: gql`
        query {
          tags {
            name,
            id
          }
        }
      `
    })
    return response.data.tags;
  },

  async createTag(name) {
    const response = await apollo.mutate({
      
      mutation: gql`
        mutation createTag(
          $name: String!
        ){
          createTag(
            name: $name,
          ) {
            id
          }
        }
      `,
      variables: {
        name
      }
    })
    return response.data.createTag.id;
  },

  async filterPosts(searchString) {
    const response = await apollo.query({
      
      query: gql`
        query($searchString: String) {
          filterPosts(searchString: $searchString) {
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
                },
                description
          }
        }
      `,
      variables: {
        searchString
      }
    })
    return response.data.filterPosts;
  }
}