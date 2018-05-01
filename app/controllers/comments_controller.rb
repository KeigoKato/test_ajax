class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    binding.pry
    if @comment.save
    end
  end

  private
  def comment_params
    comment_params = params.require(:comment).permit(:nickname, :comment).merge(post_id: params[:post_id])
  end

end
