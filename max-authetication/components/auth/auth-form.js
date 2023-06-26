import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import classes from "./auth-form.module.css";

async function createUser(email, password) {
  // console.log("Creating user");
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  // console.log("User created data: " + data);

  if (!response.ok) {
    console.log("Error creating user", response);
    throw new Error(data.message);
  }

  // return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      // [...nextauth].js 中的 credentials
      // 下面的object会被作为Argument传入[...nextauth].js中的authorize
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log("AuthForm result - ", result);

      if (!result.error) {
        // 一般不同下面这种方法，因为会重置整个页面，lose all states, 一般用于 initial page load
        // window.location.href =
        //Perform a client-side navigation to the provided route
        //without adding a new entry into the browser’s history stack
        router.replace("/profile");
      }
    } else {
      try {
        // console.log("Entering-" + enteredEmail);
        const result = await createUser(enteredEmail, enteredPassword);
        // console.log("result: " + result);
      } catch (error) {
        console.log("auth-form-error - ", error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
