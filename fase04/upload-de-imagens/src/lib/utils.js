module.exports = {
    date(timestamp) {
        const date = new Date(timestamp);

        const year = date.getFullYear();
        const month = `0${date.getMonth()+1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);
        const hour = date.getHours();
        const minutes = date.getMinutes();

        return {
            year,
            month,
            day,
            hour,
            minutes,
            format: `${day}/${month}/${year}`,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}` 
        }
    },
    formatPrice(price) {
        return value = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100).replace(".",",");
    }
}