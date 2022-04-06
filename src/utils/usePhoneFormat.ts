export const usePhoneFormat = (value: string) => {
  // n = ["0938379357", "0938", "379", "357"]
  const n = value.replace(/\D/g, "").match(/(\d{0,4})(\d{0,3})(\d{0,3})/);
  if (!n) return value;
  return !n[2] ? n[1] : n[1] + "-" + n[2] + (n[3] ? "-" + n[3] : "");
};
