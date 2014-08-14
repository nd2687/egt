class WordsController < ApplicationController

  def new
    @word = Word.new
  end

  def create
    @word = Word.new new_word
    @word.save
  end

  def delete

  end

  private
  def new_word
    params.require(:word).permit(
      :japanese, :english, :user_id
    )
  end
end
