"use client";
import { User } from "@/types/user";
import { EngineerItem } from "@/app/(authenticated)/engineers/(root)/_compoent/EngineerItem";
import { Loading } from "@/components/atoms";
import { useSearchParams } from "next/navigation";
import { SearchPagination } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchPagination";

type Props = {
  users: User[];
  totalCount: number;
};

export const EngineerList: React.FC<Props> = ({ users, totalCount }) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const params = new URLSearchParams(searchParams.toString());
  params.delete("page");
  const paramsWithoutPage = params.toString();

  if (!users) return <Loading />;

  return (
    <>
      {users.length > 0 ? (
        <>
          <div className="grid gap-4">
            {users?.map((user) => (
              <EngineerItem key={user.id} user={user} />
            ))}
          </div>
          <div className="mt-4">
            <SearchPagination
              totalCount={totalCount}
              currentPage={currentPage}
              paramsWithoutPage={paramsWithoutPage}
            />
          </div>
        </>
      ) : (
        <p className="text-center text-sm text-gray-500">
          0件でした。条件を変えて再度検索してください。
        </p>
      )}
    </>
  );
};
