import moment from "moment";


export const getDataFromFireStoreTimestampObject = ()=>{
    const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1; // Months are zero-based in JavaScript
    // const day = date.getDate();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    // return { year, month, day, hours, minutes, seconds };

   return moment(date).format("YYYY-MM-DD HH:mm");
}