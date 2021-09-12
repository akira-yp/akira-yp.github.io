Vue.config.devtools = true;

Vue.component('skill-card', {
  template: `
   <div class="card">
    <div class="has-text-centered card-title">
      <p class="title is-4">{{ name }}</p>
      <span>
       <i v-bind:class="icon" v-bind:style="fontSize">
      </span>
    </div>
    <div class="mt-4">
     <p>{{ desc }}</p>
    </div>
   </div>
  `,
  props:{
    name: String,
    icon: String,
    desc: String
  },
  data(){
    return{
      fontSize:'font-size: 2rem'
    }
  }
})

Vue.component('history-card', {
  template:`
  <div class="card">
   <div class="has-text-centered card-title">
     <p class="title is-6">{{ title }}</p>
   </div>
   <div class="mt-4">
    <p style="white-space: pre-line">{{ desc }}</p>
   </div>
  </div>
  `,
  props:{
    title: String,
    desc: String
  }
})

Vue.component('pf-card', {
  template:`
  <div class="card">
    <div class="carf-image">
      <figure class="image is-4by3">
        <img :src="image" class="pf-image">
      </figure>
    </div>
    <div class="has-text-centered card-title">
     <p class="title is-4">{{ name }}</p>
     <p class="subtitle is-6">{{ subtitle }}</p>
     <a :href="github" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i><a>
     <a :href="url" target="_blank" rel="noopener noreferrer"><i class="fas fa-link"></i><a>
   </div>
   <div class="">
    <p style="white-space: pre-line">
      {{ desc }}
    </p>
   </div>
  </div>
  `,
  props:{
    name: String,
    subtitle: String,
    image: String,
    desc: String,
    url: String,
    github: String
  }
})


new Vue({
  el:'#app',
  data:{
    prof:{
      intro:{
        name:'Akira Suzuki',
        avatar:'assets/img/IMG_5852.jpg',
        github:'https://github.com/akira-yp',
        twitter:'https://twitter.com/azaras_engine',
        address:'Chiba/Japan',
        greeting:`はじめまして、鈴木彰と申します。
                  フリーランスでテレビ番組の企画職をしています。
                  現在WEBエンジニアへのキャリアチェンジに向けて
                  バックエンド・フロントエンドのスキルを勉強しています。`
      },
      histories:[
        {
        title:'大学時代',
        desc:`上智大学文学部史学科を卒業。
        在学中は発展途上国の文化に興味を持ち、東南アジアから中近東まで広くバックパック旅行に夢中になりました。これがきっかけでペルシア語を使用して、イラン近現代史の卒論を書きました。`
      },
      {
        title:'テレビ業界での仕事',
        desc:`情報番組・バラエティ番組のリサーチ・企画をしていました。
        特に日本テレビ「世界一受けたい授業」の立ち上げから参画し、授業の企画や登壇講師の発掘・提案の仕事を通して多くのことを学びました。`
      },
      {
        title:'プログラミング',
        desc:`学生の時に独学でHPを作成していました。
        社会人をしながらPythonやPHPなどをかじるうちに再度プログラミングへの興味が再燃し、本格的に学び初めました。Rubyを使ったポートフォリオを作成しました。`
      },
      {
        title:'趣味',
        desc:`旅とゲームと料理が好きです。
        ゲームで異文化を知り、その土地へ実際に訪れ、そこで出会った料理を作ってみる。私にとってのいつか実現したいライフスタイルです。`
      },
      {
        title:'留学',
        desc:`1996年11月から3ヶ月ほどセブ島に語学留学しました。
        前職では外国人の多い職場でしたので、ディレクションや英語資料の翻訳などに役立ちました。`
      }
      ]
    },
    skills:[
      {
        name:'Ruby',
        icon:'devicons devicons-ruby',
        desc:`WEBアプリのバックエンドの言語としてメインに使用しています。`
      },
      {
        name:'JavaScript',
        icon:'fab fa-js-square',
        desc:`フロントエンドで使用しています。jQueryも日常使いしています。`
      },
      {
        name:'Leaflet.js',
        icon:'fas fa-code',
        desc:`地図が好きなので、leaflet.jsを使ってよく遊んでいます。ポートフォリオアプリではUXの中心的な役割として使用しました。`
      },
      {
        name:'Ruby on Rails',
        icon:'devicons devicons-ruby_on_rails',
        desc:`バックエンドのフレームワークとしてメインで使用しています。LineBotを作る際にAPIモードを使用して動かしました。`
      },
      {
        name:'Vue.js',
        icon:'fab fa-vuejs',
        desc:`このサイトで使用しています。今後フロントはなるべくVueを使っていこうと思っています。`
      },
      {
        name:'HTML',
        icon:'fab fa-html5',
        desc:'Railsのviewで使うことが多いです。学生の頃から触っています。'
      },
      {
        name:'CSS',
        icon:'fab fa-css3-alt',
        desc:'ポートフォリオではsassも使用しています'
      },
      {
        name:'WordPress',
        icon:'fab fa-wordpress',
        desc:`WordPressのブログ運営経験が高じて、phpを使ってテーマを作成した経験があります。`
      },
      {
        name:'AWS',
        icon:'fab fa-aws',
        desc:`ポートフォリオアプリでは、EC2にデプロイしました。ストレージにはS3を使用しています。またWordPressのテーマを作成した際にはCloud9を使用しました。`
      }
    ],
    pfs:[
      {
        name:'NOW ON MAP',
        subtitle:'地図上から未来のイベントを投稿・発見できるアプリ',
        image:'assets/img/nowonmap-logo1.png',
        url:'http://ec2-35-73-217-236.ap-northeast-1.compute.amazonaws.com/events',
        desc:`イベント情報を位置情報と日付情報を付与することで、地図上からイベントPR・イベントの発見ができるアプリを作ってみました。Leaflet.jsとAjaxを駆使してシンプルで直感的なUXにこだわりました。`,
        github:'https://github.com/akira-yp/now_on_map'
      },
      {
        name:'PORTFOLIO PAGE',
        subtitle:'このページです。',
        image:'assets/img/portfolio.png',
        url:'https://akira-yp.github.io/',
        desc:`Vue.jsとBulmaを使用して作成しました。`,
        github:'https://github.com/akira-yp/akira-yp.github.io'
      }
    ]
  }
})
