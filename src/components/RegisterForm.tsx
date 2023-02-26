import { useRef } from "react";
import { homePageClasses } from "./HomePage.classes";

interface IProps {
  withSomething?: boolean;
}

export const RegisterForm = (props: IProps) => {
  const userNameRef = useRef<HTMLInputElement>();
  const handleSubmit = () => {};
  return (
    <div className={homePageClasses().formContainer}>
      <h3>Register a user here!</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className={homePageClasses().form}
      >
        <div className={homePageClasses().formRow}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={userNameRef} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
