class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.html{redirect_to "/posts/#{params[:post_id]}"}
      end
    end
  end

  private
  def comment_params
    comment_params = params.require(:comment).permit(:nickname, :comment).merge(post_id: params[:post_id])
  end

end
