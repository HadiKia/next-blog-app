import Table from "@/ui/Table";
import { getAllUsersApi } from "@/services/authService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import UserRow from "./UserRow";

const UsersTable = async () => {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { users } = await getAllUsersApi(options);
  
  if (!users.length) return <p>کاربری پیدا نشد.</p>;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام و نام خانوادگی</th>
        <th>ایمیل</th>
        <th>سطح دسترسی</th>
        <th>تاریخ ایجاد</th>
        <th>آخرین بروزرسانی</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
