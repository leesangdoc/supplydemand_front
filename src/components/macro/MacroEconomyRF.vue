<template>  
  <v-card flat>
    <v-card-text>
      <h1>전체 참조사이트 거시경제 분석입니다...{{globalCode}}</h1><br/>
      <h3>매크로에서 중요한건 민간소비의 변화 그 이외는 부차적인 것에 불과하다(민간소비가 좋아져야 설비투자 고용이 늘어남)</h3><br/>
      <h3>경기가 어려울땐 채권 비중을 늘려야 함</h3><br/>
      <h3>공장가동률이 6개월이상 100을 넘고 상향추세면 투자(경기가 존나 안좋았다가 올라가는 경우임!!!)</h3><br/>
      <br/><br/>
      <h2>경기 선행지표 보는법</h2>
      <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-middle">
              지표명
            </th>
            <th class="text-middle">
              선행개월
            </th>
            <th class="text-middle">
              발표일
            </th>
            <th class="text-middle">
              비고
            </th>
          </tr>
          <tr>
            <td>
              <span>OECD 선행지수</span>
            </td>
            <td>
              <span>3개월</span>
            </td>
            <td>
              <span></span>
            </td>
            <td>
              <span></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>ISM 신규주문지수</span>
            </td>
            <td>
              <span>6개월</span>
            </td>
            <td>
              <span>매월 첫번째 거래일</span>
            </td>
            <td>
              <span>3개월 정도 흐름에 참고 할 것</span>
            </td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </template>
      </v-simple-table>
      <br/><br/>
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
          title: '일본_토픽스지수',
          contents: '<a target="_blank" href="https://kr.investing.com/indices/topix">일본 토픽스 지수</a>',
        },
        {
          title: '일본_닛케이지수',
          contents: '<a target="_blank" href="https://kr.investing.com/indices/japan-ni225">닛케이지수</a>',
        },
        {
          title: '부동산통계정보시스템',
          contents: '<a target="_blank" href="https://www.reb.or.kr/r-one/cm/cntnts/cntntsView.do?mi=9517&cntntsId=1075">해외사이트</a>',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
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
