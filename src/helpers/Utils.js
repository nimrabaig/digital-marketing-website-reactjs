

export const formatDate = (isoString) => {
    const date = new Date(isoString);

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const formattedDate =
        monthNames[date.getMonth()] + " " +
        date.getDate() + ", " +
        date.getFullYear();

    return formattedDate;
}

export const toNullIfEmpty = (value) => {
    const trimmedValue = value.trim();
    return trimmedValue === "" ? null : trimmedValue;
}

export const htmlToText = (html) => {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, 'text/html');
    return parsed.body.innerText;
}

export const trimString = (str, numChars) => {
    if (typeof str !== 'string' || typeof numChars !== 'number') {
        throw new Error('Input must be a string and a number');
    }
    if (str.length <= numChars) {
        return str;
    }
    return str.slice(0, numChars) + '...';
}