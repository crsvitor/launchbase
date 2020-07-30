<<<<<<< HEAD
module.exports = {
    age: function (timestamp) {
        const today = new Date();
        const birhDate = new Date(timestamp);

        let age = today.getUTCFullYear() - birhDate.getUTCFullYear();
        const month = today.getUTCMonth() - birhDate.getUTCMonth();

        if ( month < 0 || month == 0 && today.getUTCDate() < birhDate.getUTCDate() ) {
            return age = age -1;
        } 

        return age; 
    },
    graduation: function (nivel) {
        switch (nivel) {
            case "completed-highschool":  
                return "Ensino Médio Completo";                
                break;
            case "completed-graduation": 
                return "Ensino Superior Completo";                
                break;
            case "masters-degree": 
                return "Mestrado Completo";                
                break;
            case "doctorate-graduation": 
                return "Doutorado Completo";
                break;
        
            default:
                return "não indentificado"
                break;
        }
    },
    date: function (timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth()+1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return {
            year,
            month,
            day,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}` 
        }
    },
    grade: function (grade) {
        switch (grade) {
            case "5-ano":
                return "5° ano do Ensino Fundamental"
                break;

            case "6-ano":
                return "6° ano do Ensino Fundamental"
                break;

            case "7-ano":
                return "7° ano do Ensino Fundamental"
                break;

            case "8-ano":
                return "8° ano do Ensino Fundamental"
                break;
            case "9-ano":
                return "9° ano do Ensino Fundamental"
                break;

            case "1-medio":
                return "1° ano do Ensino Médio"
                break;

            case "2-medio":
                return "2° ano do Ensino Médio"
                break;
            
            case "3-medio":
                return "3° ano do Ensino Médio"
                break;
        }
    }
=======
module.exports = {
    age: function (timestamp) {
        const today = new Date();
        const birhDate = new Date(timestamp);

        let age = today.getUTCFullYear() - birhDate.getUTCFullYear();
        const month = today.getUTCMonth() - birhDate.getUTCMonth();

        if ( month < 0 || month == 0 && today.getUTCDate() < birhDate.getUTCDate() ) {
            return age = age -1;
        } 

        return age; 
    },
    graduation: function (nivel) {
        switch (nivel) {
            case "completed-highschool":  
                return "Ensino Médio Completo";                
                break;
            case "completed-graduation": 
                return "Ensino Superior Completo";                
                break;
            case "masters-degree": 
                return "Mestrado Completo";                
                break;
            case "doctorate-graduation": 
                return "Doutorado Completo";
                break;
        
            default:
                return "não indentificado"
                break;
        }
    },
    date: function (timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth()+1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return {
            year,
            month,
            day,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}` 
        }
    },
    grade: function (grade) {
        switch (grade) {
            case "5-ano":
                return "5° ano do Ensino Fundamental"
                break;

            case "6-ano":
                return "6° ano do Ensino Fundamental"
                break;

            case "7-ano":
                return "7° ano do Ensino Fundamental"
                break;

            case "8-ano":
                return "8° ano do Ensino Fundamental"
                break;
            case "9-ano":
                return "9° ano do Ensino Fundamental"
                break;

            case "1-medio":
                return "1° ano do Ensino Médio"
                break;

            case "2-medio":
                return "2° ano do Ensino Médio"
                break;
            
            case "3-medio":
                return "3° ano do Ensino Médio"
                break;
        }
    }
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
}