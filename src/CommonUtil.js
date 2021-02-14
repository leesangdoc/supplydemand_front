export class CommonUtil{
    cellStyleFormatter(params) {
        if (params.value > 0) return {color: 'red'};
        else return {color: 'blue'};
    }

    curruncyFormatter(params){ 
        return Math.floor(params.value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
}

