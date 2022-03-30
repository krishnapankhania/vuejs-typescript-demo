import { users } from "@/assets/users";
/**
 * Order type for basic details of food order
 *
 * @export
 * @interface Orders
 */
export interface Orders {
  id: number;
  item: string;
  from: string;
  count: number;
  image: string;
  date: string;
}
/**
 * User type for user entity
 *
 * @export
 * @interface User
 */
export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  orders?: Orders[];
}

/**
 * Response type is to define success or failure response
 * 
 * @interface Response
 */
interface Response {
  success: boolean;
  data: any;
}

/**
 * this class is a helper class to perform user operations
 *
 * @class UserHelper
 */
class UserHelper {
  login(email: string, password: string): Response {
    const loggedInuser: User[] = users.filter(
      (user: any) => user.email === email && user.password === password
    );
    if (loggedInuser.length > 0) {
      return {
        success: true,
        data: loggedInuser[0],
      };
    } else {
      return {
        success: false,
        data: `Unauthenticated access.`,
      };
    }
  }
}

const userHelper = new UserHelper();

export default userHelper;
