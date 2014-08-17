class WordsController < ApplicationController

  def new
    @word = Word.new
  end

  def create
    @word = Word.new(user_id: params['user_id'],
                     english: params[:english], japanese: params[:japanese])
    render json: [ @word.english, @word.japanese ] if @word.save!
  end

  def reverse
    @words = current_user.words.all.order(:updated_at).reverse_order
  end

  def delete

  end
end
