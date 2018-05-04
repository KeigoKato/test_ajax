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
    var nicknameField = $("#nickname_field").val();
    var commentField = $("#comment_field").val();
    var showNum = $("#new_comment").attr("action").replace(/\/posts\//g, "").replace(/\/comments/g, "")
    var url = "/posts/" + showNum + "/comments.json"
    $.ajax({
      type: "POST",
      url: url,
      data: {
        comment: { nickname: nicknameField, comment: commentField}
      },
      dataType: "json"
    })
    .done(function(data){
      var html = buildHTML(data);
      $("#comments").append(html);
    })
    .fail(function(){
      alert("通信に失敗")
    });
  });
});
