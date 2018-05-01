class CommentsController < ApplicationController

  def create
    @comment = Comment.new
    binding.pry
  end

end
