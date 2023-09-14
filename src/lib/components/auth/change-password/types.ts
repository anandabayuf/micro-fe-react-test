export type NewPasswordCheck = {
  isCapitalExist: boolean;
  isNumberExist: boolean;
  isLowerCaseExist: boolean;
  isSpecialCharExist: boolean;
  isAboveMinimum: boolean;
  isBelowMaximum: boolean;
};
