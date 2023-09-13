export const getTodayDate = (): string => {
  const today = new Date();
  return today.toISOString().slice(0, 10); // "YYYY-MM-DD"
};

export const getTomorrowDate = (): string => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().slice(0, 10); // "YYYY-MM-DD"
};
