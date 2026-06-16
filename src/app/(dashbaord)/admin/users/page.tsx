import { Suspense } from "react";
import UsersTable from "./_components/UsersTable";
import UsersTableSkeleton from "./_components/UsersTableSkeleton";

const UsersPage = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="border-b border-secondary-200 pb-6 mb-10">
        <h2 className="text-2xl font-bold text-secondary-700">لیست کاربران</h2>
      </div>

      <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTable />
      </Suspense>
    </div>
  );
};

export default UsersPage;
