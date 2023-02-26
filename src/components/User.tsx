import { UserT } from "./types";

interface IUserProps {
  userData: UserT;
}

export const User = (props: IUserProps) => {
  return (
    <div>{`User name is ${props.userData.name} and email is ${props.userData.email}`}</div>
  );
};
