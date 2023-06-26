import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// AuthPage and ProfilePage are protected ,
// depending on the authentication status

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        // it means authenticated already
        router.replace("/");
      } else {
        // it means need to log in, to show the AuthForm
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return <AuthForm />;
}

export default AuthPage;
