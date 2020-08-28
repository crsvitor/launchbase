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
    },
    formatCpfCnpj(value) {
        value = value.replace(/\D/g, "")

        if (value.length > 14) {
            value = value.slice(0, -1);
        }

        // check if it's cpnj - 11.222.333/0001-11
        if (value.length > 11) {
            // valor recebido = 11222333000111

            // 11.222333000111
            value = value.replace(/(\d{2})(\d)/, "$1.$2");

            // 11.222.333000111
            value = value.replace(/(\d{3})(\d)/, "$1.$2");

            // 11.222.333/000111
            value = value.replace(/(\d{3})(\d)/, "$1/$2");

            // 11.222.333/0001-11
            value = value.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            //cpf 111.222.333-44
            value = value.replace(/(\d{3})(\d)/, "$1.$2");

            value = value.replace(/(\d{3})(\d)/, "$1.$2");

            value = value.replace(/(\d{3})(\d)/, "$1-$2");
        }

        return value
    },
    formatCep(value) {
        value = value.replace(/\D/g,"");

        value = value.replace(/(\d{5})(\d)/, "$1-$2");

        if (value.length > 9) {
            value = value.slice(0, -1);    
        }

        return value
    }
}