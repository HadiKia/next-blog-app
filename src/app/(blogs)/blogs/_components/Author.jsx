import Avatar from "@/ui/Avatar";

const Author = ({ name, avatarUrl }) => {
  const validAvatarUrl =
    !avatarUrl || avatarUrl.endsWith("/null") ? undefined : avatarUrl;

  return (
    <div className="flex items-center justify-start gap-x-2">
      <Avatar src={validAvatarUrl} width={24} />
      <span className="text-sm text-secondary-600">{name}</span>
    </div>
  );
};

export default Author;
