import { User } from "./User";
import { useUsers } from "./UserList.hooks";

export const UserList = () => {
  const { result, loading } = useUsers();

  return (
    <div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        result.data.map((user, index) => (
          <User
            key={index}
            userData={{ id: user.id, name: user.name, email: user.email }}
          />
        ))
      )}
    </div>
  );
};
