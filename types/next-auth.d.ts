import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's email address */
      email?: string
      /** The user's name */
      name?: string
      /** The user's ID */
      id: string
    }
  }

  interface User {
    /** The user's ID */
    id: string
    /** The user's name */
    name?: string
    /** The user's email address */
    email?: string
  }
}