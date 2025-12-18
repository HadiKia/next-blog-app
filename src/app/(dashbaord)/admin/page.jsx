import { fetchCardData } from "@/services/dashboardData";
import Card from "./_components/Card";
import PostsTable from "./posts/_components/PostsTable";

const Admin = async () => {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchCardData();
  return (
    <div className="p-4 lg:p-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <Card title="کاربران" value={numberOfUsers} type="users" />
        <Card title="نظرات" value={numberOfComments} type="comments" />
        <Card title="پست ها" value={numberOfPosts} type="posts" />
      </div>

      <PostsTable query="sort=latest&limit=5"/>
    </div>
  );
};

export default Admin;
