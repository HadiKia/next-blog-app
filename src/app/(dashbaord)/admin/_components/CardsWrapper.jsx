import { fetchCardData } from "@/services/dashboardData";
import Card from "./Card";

const CardsWrapper = async () => {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchCardData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14 pb-14 border-b border-secondary-200">
      <Card title="کاربران" value={numberOfUsers} type="users" />
      <Card title="نظرات" value={numberOfComments} type="comments" />
      <Card title="پست ها" value={numberOfPosts} type="posts" />
    </div>
  );
};

export default CardsWrapper;
