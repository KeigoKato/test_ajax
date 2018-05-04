$(function(){

  function buildHTML(comment) {
    var html = `
      <div>
        <h5>nickname</h5>
        <p>
        ${comment.nickname}
        </p>
        <h5>comment</h5>
        <p>
        ${comment.comment}
        </p>
      </div>
    `

    return html
  }

  $("#new_comment").on("submit", function(e){
    e.preventDefault();
    var nicknameField = $("#nickname_field").val();   //入力したフォームの内容を取得する
    var commentField = $("#comment_field").val();   //入力したフォームの内容を取得する
    var showNum = $("#new_comment").attr("action").replace(/\/posts\//g, "").replace(/\/comments/g, "")
    var url = "/posts/" + showNum + "/comments.json"
    $.ajax({
      type: "POST",
      url: url,
      data: {
        comment: { nickname: nicknameField, comment: commentField}
        //@commentはnicknameとcommentを持つ。それぞれに上で作った変数を代入する。
      },
      dataType: "json"
    })
    .done(function(data){
      var html = buildHTML(data);
      $("#comments").append(html);
      $("#nickname_field").val("");
      $("#comment_field").val("");
      $("#submit_btn").prop("disabled", false);
    })
    .fail(function(){
      alert("通信に失敗");
    });
  });
});
