import { toPersianDigits } from "@/utils/numberFormatter";
import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  users: UserGroupIcon,
  comments: ChatBubbleBottomCenterIcon,
  posts: DocumentTextIcon,
};

const Card = ({ title, value, type }) => {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl flex flex-col ">
      <div className="flex items-center justify-center gap-x-1 p-4 lg:py-6 text-secondary-500 font-medium">
        {Icon ? <Icon className="w-5 h-5 lg:w-6 lg:h-6" /> : null}
        <h3 className="text-base lg:text-lg ">{title}</h3>
      </div>
      <p className="truncate rounded-lg lg:rounded-xl bg-secondary-100 px-4 py-6 lg:py-8 text-center text-2xl lg:text-3xl text-primary-800 font-semibold">
        {toPersianDigits(value)}
      </p>
    </div>
  );
};

export default Card;
