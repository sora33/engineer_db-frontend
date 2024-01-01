"use client";
import { User } from "@/types/user";
import { EngineerItem } from "@/app/(authenticated)/engineers/(root)/_compoent/EngineerItem";
import { Loading } from "@/components/atoms";

type Props = {
  users: User[];
};

export const EngineerList: React.FC<Props> = ({ users }) => {
  if (!users) return <Loading />;
  return (
    <div className="grid gap-4">
      {users?.map((user) => (
        <EngineerItem key={user.id} user={user} />
      ))}
    </div>
  );
};
