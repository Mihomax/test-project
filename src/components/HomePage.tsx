import { RegisterForm } from "./RegisterForm";
import { homePageClasses } from "./HomePage.classes";
import { UserList } from "./UserList";

interface IProps {
  withSomething?: boolean;
}

export const HomePage = (props: IProps) => {
  return (
    <div className={homePageClasses().container}>
      <h1>Welcome to users page!</h1>
      <UserList />
      <RegisterForm />
    </div>
  );
};
