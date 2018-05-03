class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.new(comment_params)  #jbuilderにわたすためにインスタンス変数にする必要がある。
    if @comment.save
      # #redirect_toがあるとjsを呼び出すことができない
      # #通常のhtmlリクエストを行う場合はhtmlをフォーマットに指定する必要がある
      # #json形式の場合はjsonをフォーマットに指定する
      respond_to do |format|
        format.html{redirect_to "/posts/#{params[:post_id]}"}
        format.json
      end
    end
  end

  private
  def comment_params
    comment_params = params.require(:comment).permit(:nickname, :comment).merge(post_id: params[:post_id])
  end

end
