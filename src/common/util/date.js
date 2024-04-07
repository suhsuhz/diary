export const setDateData = (date) => {
    try {
        const tempDate = date.split('T');
        const ymd = tempDate[0];
        const tempTime = tempDate[1].split('.')[0];
        const time = tempTime.split('+')[0];

        return {
            ymd: ymd,
            time: time
        }
    } catch (error) {
        return {
            ymd: '',
            time: ''
        }
    }

}