import { ReactNode, useState } from "react";
import { useAuthContext } from "../../auth/useAuthContext";

export default function LoginPage(): JSX.Element {
  /*
  JwtContext에서 login 함수를 가져와서 사용.
  파라미터가 전달되고, API통신 뒤, 성공하면 그 값은 login함수 내부의 dispatch 함수를 통해 전달함.
  dispatch 함수는 reducer 함수에게 action을 전달하면, reducer 함수는 action의 타입에 따라 state를 변경함.
  memoizedValue(useMemo함수)를 사용하여 이렇게 변경된 state를 하위 컴포넌트에 전달함  
  */
  const { login } = useAuthContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  /*
  
  const onSubmit = async (data: FormValuesProps) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  */
  //   const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    try {
      console.log("user :", user);
      await login(user.email, user.password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <button onClick={handleSubmit}>--Login--</button>
        </form>
      </div>
    </>
  );
}
