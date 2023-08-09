type loggedProps = {
    image: string
};

type PostsType = {
    title: string
    id: string
    createdAt?: string
    comments: {
      createdAt: string
      id: string
      postId: string
      userId: string
    }[]
    user: {
      name: string
      image: string
    }
  }

  type AuthPosts = {
    email: string
    id: string
    image: string
    name: string
    posts: {
      createdAt: string
      id: string
      title: string
      comments?: {
        createdAt: string
        id: string
        postId: string
        title: string
        userId: string
      }[]
    }[]
  }

  type ToggleProps = {
    deletePost: () => void
    setToggle: (toggle: boolean) => void
  }


  type EditProps = {
    id: string
    avatar: string
    name: string
    title: string
    comments?: {
      id: string
      postId: string
      userId: string
    }[]
  }
  