const PostList = async () => {
  await new Promise((res) => setTimeout(() => res(), 1000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return posts.length > 0
    ? posts.map((post) => <div key={post._id}>{post.title}</div>)
    : null;
};

export default PostList;
