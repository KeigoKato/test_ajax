$(function(){
  function buildHTML(data){
    var html = `
      <div>
        <h5>nickname</h5>
        <p>
        ${data.nickname}
        </p>
        <h5>comment</h5>
        <p>
        ${data.comment}
        </p>
      </div>
    `
    return html;
  }

  $("#new_comment").on("submit", function(e){
    e.preventDefault();  //これによりhtml形式の通信をストップする。
    var formData = new FormData(this);  //フォームに入力された文字列を拾ってくる。
    var url = $(this).attr("action");   //comments#createのURLをひろってくる。後で使う。
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",  //これがあることでcommentsコントローラのjsonフォーマットが動く。
      processData: false,
      contentType: false
    })
    // jbuilderでフォームのデータをjson形式に変換する必要がある。jbuilderを忘れると406エラーが返ってくる。
    .done(function(data){
      var html = buildHTML(data);
      $("#comments").append(html);
      $("#nickname_field").val("");
      $("#comment_field").val("");
      $("#submit_btn").prop("disabled", false); // submitボタンを有効にする
    })
    .fail(function(){
      alert("通信に失敗しました")
    });
  });
});
