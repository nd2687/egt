class WordsController < ApplicationController

  def new
    @word = Word.new
  end

  def create
    @word = Word.new(user_id: params['user_id'],
                     japanese: params[:japanese], english: params[:english])
    render json: [ @word.japanese, @word.english ] if @word.save!
  end

  def delete

  end
end
