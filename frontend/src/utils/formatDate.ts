/* eslint-disable consistent-return */
export default function formatDate(date: Date | undefined): string | void {
  console.log(date);

  if (date !== undefined) {
    const dateTime = new Date(date);

    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const day = dateTime.getDate();

    return `${year}-${month}-${day}`;
  }
}
