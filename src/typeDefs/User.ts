export const User = `
  #graphql
  
  type UserPhoto {
      image_21x21: String
      image_27x27: String
      image_36x36: String
      image_60x60: String
      image_128x128: String
  }
  
  type User {
      gid: String
      email: EmailAddress
      name: String
      photo: UserPhoto
      workspaces: [Workspace]
  }
`;
