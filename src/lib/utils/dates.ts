export const formatDate = (
  date: Date,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }
) => {
  return new Intl.DateTimeFormat('en-gb', options).format(date);
};

export const formatDateUSMedium = (
  date: Date,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
) => {
  return new Intl.DateTimeFormat('en-us', options).format(date);
};
