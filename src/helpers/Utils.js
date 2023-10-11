

export const formatDate = (isoString) => {
    const date = new Date(isoString);

    const pad = (num) => String(num).padStart(2, '0');

    const formattedDate =
        pad(date.getMonth() + 1) + "/" +
        pad(date.getDate()) + "/" +
        date.getFullYear() + " " +
        pad(date.getHours()) + ":" +
        pad(date.getMinutes()) + ":" +
        pad(date.getSeconds());

    return formattedDate;
}