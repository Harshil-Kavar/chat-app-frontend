import { isValidUsername } from "6pp";

export const userNameValidator = (
  userName: string
): { isValid: boolean; errorMessage: string } | undefined => {
  if (!isValidUsername(userName))
    return { isValid: false, errorMessage: "Invalid UserName" };
};
