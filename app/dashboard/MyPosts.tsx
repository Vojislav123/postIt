"use client"

import EditPost from "./EditPost"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts")
  return response.data
}

export default function MyPosts(): JSX.Element {
  const { data, isLoading } = useQuery<AuthPosts>(
    queryFn: fetchAuthPosts,
    hashQueryKey: ['auth-posts']
  )
  if (isLoading) return <h1>Posts are loading...</h1>
  if (data) console.log(data)
  return (
    <div>
      {data?.Post?.map((post) => (
        <EditPost
          id={post.id}
          key={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  )
}