import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  // how the session for an authenticated user will be managed
  session: { jwt: true },
  providers: [
    Provider.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const userCollection = client.db().collection("users");
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("No User Found");
        }

        //compare the password
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();

        // 最后会返回一个 object， 说明 auth 成功，这里只放入一个 email，因为不想password被展示出来
        return { email: user.email };
      },
    }),
  ],
});
