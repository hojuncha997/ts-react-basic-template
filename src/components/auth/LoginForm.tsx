import { ReactNode } from "react";

export default function LoginPage(): JSX.Element {
  return (
    <>
      <div>
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button>Login</button>
      </div>
    </>
  );
}
