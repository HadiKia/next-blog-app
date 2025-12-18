import { Suspense } from "react";
import CardsWrapper from "./_components/CardsWrapper";
import LatestPosts from "./_components/LatestPosts";

const Admin = async () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <h2 className="text-2xl font-bold text-secondary-700 mb-6 lg:mb-8">آمار</h2>
      <Suspense fallback={<p>درحال بارگزاری کارت ها</p>}>
        <CardsWrapper />
      </Suspense>

      <h2 className="text-2xl font-bold text-secondary-700 mb-6 lg:mb-8">
        آخرین بلاگ ها
      </h2>
      <Suspense fallback={<p>درحال بارگزاری جدول</p>}>
        <LatestPosts />
      </Suspense>
    </div>
  );
};

export default Admin;
