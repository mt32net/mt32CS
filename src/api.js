import apollo from './apolloClient'
import gql from 'graphql-tag'

export default {
    async getPost(id) {
        const response = await apollo.query({

            query: gql`
            query Post($id: ID!){
              Post(id: $id) {
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
    
        return response.data.Page;
    },
    async getAllPages() {
        const response = await apollo.query({

            query: gql`
            query {
              allPages {
                id
                icon,
                article {
                  title
                }
              }
            }
            `
          })
          return response.data.allPages;
    },
    async getAllPosts() {
        const response = await apollo.query({

            query: gql`
            query {
              allPosts {
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
            `
          })
          return response.data.allPosts;
    }
}