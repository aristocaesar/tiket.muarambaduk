export class Dates {

    static toDateString(value : string) {
        // Parse the input date string
        const date = new Date(value);

        // Get the day, month, and year components
        const day = date.getDate().toString().padStart(2, "0"); // Pad with leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
        const year = date.getFullYear().toString();

        // Create the formatted date string
        return `${day}/${month}/${year}`;
    }

}