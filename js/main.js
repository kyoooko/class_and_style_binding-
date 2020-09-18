// クラスとスタイルのバインディング
// var app =はつけてもつけなくてもいい
var app = new Vue({
  el: '#app',
  // ここから書いてく
  data:{
    // message: 'Hello,vue.js!',
    // ◆v-bind:classに動的にクラスを切り替えるオブジェクトを渡す
    // ◆複数のクラスを動的に切り替える(クラス名に-含む場合は'で囲む) 
    isLarge:true,
    hasError: true,
    // ◆配列構文によるクラスのデータバインディング
    largeClass:'large',
    dangerClass:'text-danger',
    // ◆オブジェクトデータの利用
    classObject:{
      large:true,
      'text-danger':true
    },
    // ◆クラスの条件に三項演算子を使う 
    classObject2: {
      'bg-gray':true
    },
    isLarge2: true,
    // ◆インラインスタイルのデータバインディング
    color:'blue',
    fontSize: 50,
    // ◆インラインスタイルのデータバインディングにオブジェクトデーターを使う
    styleObject:{
      color:'blue',
      fontSize: '50px'
    }




  }
})