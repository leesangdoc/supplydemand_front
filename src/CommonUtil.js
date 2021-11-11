export class CommonUtil{
    cellStyleFormatter(params) {
        if (params.value > 0) return {color: 'red'};
        else return {color: 'blue'};
    }

    curruncyFormatter(params){
        if(params.data.period == "주가선도(%)" 
            || params.data.period == "보유비중(%)"
            || params.data.period == "분산비율(%)"
            || params.data.period == "분산비율_보정"
            || params.data.period == "수익률"){

            if(params.value !==""){
                return params.value + "%";
            } else {
                return params.value;
            }
            
        } else {
            return Math.floor(params.value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        }
        
    }

    changeDate(list){
        list.forEach(
            element => {
              var eltStr = element[0].toString();
              var trnDay = (
                new Date(
                  parseInt(eltStr.slice(0,4)),
                  parseInt(eltStr.slice(4,6))-1,
                  parseInt(eltStr.slice(6, 8))
              )).getTime();
              element[0] = trnDay;
          });
          return list;
    }

    addArrSeriesData(){
        let series = {
            name: '테스트용',
            // pointStart: Date.UTC(2018, 1, 1),
            // pointInterval: 1000 * 3600 * 24,
            data: [],
            marker: {
              enabled: null, // auto
              radius: 3,
              lineWidth: 1,
              lineColor: '#800000',
            },
            tooltip: {
                split: true,
                valueDecimals: 0,
                valueSuffix: '원',
            },
            dataGrouping:{
              approximation: 'average',
              enabled:true,
              forced:true,
              groupAll:true,
              groupPixelWidth:15,
            }
          };
          return series;
    }
}

