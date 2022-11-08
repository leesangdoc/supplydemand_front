<template>
  <v-app id="inspire">
    <v-treeview
      activatable
      color="warning"
      :items="items"
    ></v-treeview>
  </v-app>
</template>

<script>

export default {
  mounted(){
  }
  , beforeDestroy() {
  }
  , beforeMount(){
  }
  , components: {
  }
  , methods: {

  },
  data: () => ({
    items: [
      {
        id: 1,
        name: '사경인_재무제표_모르고_투자하지마라 :',
        children: [
          { 
            id: 2
            , name: '성장주'
            , children: [
              {
                id: 3,
                name: 'PEGR(Price Earnings to Growth Ratio): PER / EPS 증가율',
                children: [
                  { id: 4, name: '피터린치: 기준 1로 잡는다. 0.5 이하면 저평가 매수, 1.5 이상이면 고평가로 매도' }
                  , { id: 5, name: '회사가 성장할 수 있는 구조인지 살피려면 재무제표 학습이 반드시 선행되어야 함' }
                  , { id: 6, name: 'PER은 언제 본전을 찾을 수 있는 기간. 10이면 10년 걸린다는 뜻(주가 / 1주당 배당금)' }
                ],
              },
            ],
          },
          { 
            id: 7
            , name: 'RIM' 
            , children: [
              { 
                id: 8
                , name: '요구수익률(내가 원하는 수익률보다 안나오면 해당 기업은 즉시 제낀다... 싸다는 이유만으로 투자해선 안됨)'
              }
              , { 
                id: 9
                , name: '기업가치 => 자산가치 + 초과이익의 현재가치 = 자기자본 + (초과이익 / 할인율)'
              },
              { 
                id: 10
                , name: 'ROE(자기자본 순이익률)= 당기순이익을 자기자본으로 나누어 구함'
              },
              { 
                id: 11
                , name: '주주 요구수익률 10% 일 때, 100억 자기자본에 10억 벌어오면 RIM = 100억 짜리 기업(기업가치 = 자기자본 + 초과이익의 가치)'
              },
              { 
                id: 12
                , name: '만약, 14억 즉, 4억 더 벌어오면 이렇게 됨. 100 + ( 100 * ( 0.14 - 0.1 ) / 0.1 ) = 140억'
              },
              { 
                id: 13
                , name: '만약, 8억 즉, 요구수익률 대비 2억 덜 벌어오면 이렇게 됨. 100 + ( 100 * ( 0.08 - 0.1 ) / 0.1 ) = 80억.'
              },
              { 
                id: 14
                , name: '근데, 이 기업 시총 현재 90억 이면 PBR은 0.9 근데 가격이 싼 주식인가? 절대아님 80억이 적정가치... 현재 고평가 상태임'
              },
              { 
                id: 15
                , name: '반대로, 주주의 요구수익률을 훨씬 뛰어넘는 ROE를 냈다면 PBR이 높아도 저평가임.'
              },
              { 
                id: 16
                , name: '자기자본 173조, 주주요구수익률 8%, 회사ROE 12.8% 이 기업의 적정가치는?'
                , children: [
                  { 
                    id: 17
                    , name: '173 + (( 173 * (0.128-0.08)) / 0.08) = 276.8조/162,412,764(발행주식) => 적정주가: 170만원' 
                  }
                ]
              },
              { 
                id: 18
                , name: '기업가치 = 자기자본 + (초과이익 / 할인율) => http://comp.fnguide.com/ 웬만한 수치 여기 다있음'
              },
              { 
                id: 19
                , name: 'ROE 구하는법(중요!)'
                , children: [
                  { 
                    id: 20
                    , name: '지배주주 ROE를 구해야함 직전 3년 기준... 수식: 지배주주순이익 / 지배주주지분'
                  },
                  { 
                    id: 21
                    , name: 'ROE 추정시, 계속 일정 퍼센티지로 상승 혹은 하락시, 직전년도 ROE 값으로 가정함'
                  },
                  { 
                    id: 22
                    , name: 'ROE 추정시, 상승 혹은 하락 왔다갔다시, 가중평균으로 산출... 2013년(11.75), 2014년(14.33), 2015년(12.68)이면'
                    , children: [
                      { 
                        id: 23
                        , name: '(11.75 * 1 + 14.33 * 2 + 12.68 * 3) / 6 = 13.075%'
                      },
                    ]
                  },
                ]
              },
              { 
                id: 24
                , name: '이제 할인율 구하는 법'
                , children: [
                  { 
                    id: 25
                    , name: '5년만기 회사채 신용등급 BBB- 기준으로 본다. (https://www.kisrating.com/ratingsStatistics/statics_spread.do) 3년 만기를 기준으로 한다. 한국신용평가 홈페이지, BBB- 등급 채권 5년 수익률(회사채 수익률) 2022년 11월 기준 값은 11.76%인 것을 확인할 수 있어요. - 만약 평균 ROE 값이 회사채 수익률보다 낮다면, 굳이 투자할 필요는 없어요.'
                  },
                ]
              },
              { 
                id: 26
                , name: '초과이익 값 구하기(자기자본 x (ROE - 할인율)) => 최근 3년 치 ROE 값을 가중 평균. 예를 들어, 삼성전자의 최근 3년 ROE 값은 2017년 : 21.01%, 2018년: 19.63%, 2019년: 8.69%로 확인. 가중평균ROE(자기자본) = (8.69×3 + 19.63 × 2 + 21.03 × 1) / 6 = 14.39%​  초과이익=자기자본×(ROE−할인율)​=2,549,155억원×(14.39%−7.94%)=16,442억원'
              },
              { 
                id: 26
                , name: '유통주식 수 값 구하기 ( "발행 주식 수" 값에서 "자기주식 수"를 빼면 유통주식 수 값)예를 들어, 삼성전자의 유통주식 수는 5,969,782,550(이 당시엔 자기주식수 없음)'
              },
              { 
                id: 27
                , name: '적정주가 = 기업가치 / 유통주식 수'
              },
            ],  
          },
          
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ],
  }),
}
</script>
