<template>  
  <v-card flat>
    <v-card-text>
      <h1>전체 참조사이트 거시경제 분석입니다...{{globalCode}}</h1>
      <br/>
      <h2>주요 경제지표</h2>
      <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-middle">
              Title
            </th>
            <th class="text-middle">
              Contents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>유가(석유): 텍사스, 두바이, 브렌트</span>
            </td>
            <td>
              <span>
                <a target="_blank" href="https://www.petronet.co.kr/v3/index.jsp">국제유가</a>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>OECD_경기선행지수</span>
            </td>
            <td>
              <span>
                <a target="_blank" href="https://data.oecd.org/leadind/composite-leading-indicator-cli.htm">OECD_경기선행지수(전국가 모두 볼 수 있음)</a>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>미국 제조업, 서비스업 PMI_지수</span>
            </td>
            <td>
              <span>
                <a target="_blank" href="https://ko.tradingeconomics.com/united-states/manufacturing-pmi">PMI_지수</a>
              </span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>


      <br/>
      <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-middle">
              Title
            </th>
            <th class="text-middle">
              Contents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultList" :key="item.title">
            <td>
              <span v-html="item.title"></span>
            </td>
            <td>
              <span v-html="item.contents"></span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  title: 'HelloWorld'
  // 이게 액션기능인듯...
  , methods: {
    
  }
  , props: ['globalCode']
  , data: function() {
    console.log('macroReferenceSite this.globalCode;;;', this.globalCode);
    return {
      hero: this.globalCode
      ,  resultList: [
        {
          title: '국가통계포털',
          contents: '<a target="_blank" href="https://kosis.kr/index/index.do">국가통계포털</a>',
        },
        {
          title: '금융투자협회<br/>(자본시장통계)',
          contents: '<a target="_blank" href="https://freesis.kofia.or.kr/">자본시장통계</a>',
        },
        {
          title: '국가지표체계',
          contents: '<a target="_blank" href="https://www.index.go.kr/unify/main.do?clasCd=10">국가지표체계</a>',
        },
        {
          title: '산업연구원',
          contents: '<a target="_blank" href="https://www.kiet.re.kr/">산업연구원</a>',
        },
        {
          title: '산업연구원(보도자료)',
          contents: '<a target="_blank" href="https://www.kiet.re.kr/communicate/medataList">산업연구원(보도자료)</a>',
        },
        {
          title: '컨슈머인사이트',
          contents: '<a target="_blank" href="https://www.consumerinsight.co.kr/index.aspx">컨슈머인사이트</a>',
        },
        {
          title: '한국은행경제통계시스템',
          contents: '<a target="_blank" href="https://ecos.bok.or.kr/">한국은행경제통계</a>',
        },
        {
          title: 'OECD 각종통계자료',
          contents: '<a target="_blank" href="https://stats.oecd.org/">OECD 각종통계자료</a>',
        },
        {
          title: 'OECD 산업생산지수',
          contents: '<a target="_blank" href="https://stats.oecd.org/">Industry and Services->Industry and Service Statistics (MEI)->Production and Sales (MEI)->Production and Sales (MEI)</a>',
        },
        {
          title: 'WHO COVID-19 INFO',
          contents: '<a target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?adgroupsurvey={adgroupsurvey}&gclid=Cj0KCQjw166aBhDEARIsAMEyZh5ue1UsDtyB83Qnvz3z1Q_oD958fwJN5h-hrjAvVoA35vAGoxi8g50aAlymEALw_wcB">WHO COVID-19 INFO</a>',
        },
        {
          title: '통계용어해설',
          contents: '<a target="_blank" href="http://kostat.go.kr/understand/info/info_lge/1/index.action?bmode=languge&keyWord=0">통계용어해설</a>',
        },
        {
          title: '',
          contents: '',
        },
        
        
        
      ],
    }
  }
}
</script>
