import { getSession } from "next-auth/client";
import UserProfile from "../components/profile/user-profile";

// 把逻辑关系从 user-profile 中移到这里，这样就不会出现闪屏。
// 因为user-profile只有在ProfilePage render 的时候才会render
// 而ProfilePage只有在authenticated的时候才会render

function ProfilePage() {
  return <UserProfile />;
}

// in getServerSideProps
// we can also call getSession and actually pass
// in an object where we set a request key, a req key
// to the incoming request, which we get
// out of the context we're receiving here, context.req.
// Don't forget that you have access to the request object
// through that context when using getServerSideProps.
// And we pass this request which we get here
// into this getSession function through that req key
// in that configuration object.
// And then, getSession will automatically look
// into that request and extract the data it needs
// the session token cookie, to be precise,
// and see if that's valid, and if the user is authenticated
// and if that cookie even exists to begin with.
// So, that will all happen behind the scenes.

export async function getServerSideProps(context) {
  // And this will be null if the user is not authenticated
  // and it will be a valid session object,
  // if the user is authenticated.
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false, //only this time that we redirect because the user is not logged in.
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
