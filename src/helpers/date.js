

export const getDate = (date) => {

    if (!date) {

        return
    }
        console.log("esta es la fecha:", date)
    
        let options = { timeZone: 'America/Caracas', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        let formattedDate = new Intl.DateTimeFormat('es-VE', options).format(new Date(date));
        
        console.log("esta es la fecha:", formattedDate)
    return formattedDate 



      
    
}