export const useIsLoggedIn = () => {
  return useState<boolean>("isLoggedIn", () => false);
}
