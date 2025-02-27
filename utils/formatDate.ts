export const formatDate = (date: Date) => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}
