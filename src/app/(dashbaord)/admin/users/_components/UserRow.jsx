import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { DeleteUser } from "./Buttons";

const roleStyle = {
  admin: {
    label: "ادمین",
    className: "badge--primary",
  },
  user: {
    label: "عادی",
    className: "badge--secondary",
  },
};

const UserRow = ({ index, user }) => {
  const { _id, name, email, role, createdAt, updatedAt } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <span className={`badge ${roleStyle[role].className}`}>
          {roleStyle[role].label}
        </span>
      </td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>{toLocalDateShort(updatedAt)}</td>
      <td>
        <div className="flex items-center gap-x-2">
          <DeleteUser name={name} id={_id} />
        </div>
      </td>
    </Table.Row>
  );
};

export default UserRow;
