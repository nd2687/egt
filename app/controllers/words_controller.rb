class WordsController < ApplicationController

  def new
    @word = Word.new
  end

  def create
    @word = Word.new(user_id: params['user_id'],
                     english: params[:english], japanese: params[:japanese])
    if @word.save
      render json: [ @word.english, @word.japanese ]
    else
      render json: (@word.errors.present? ? ([false] + @word.errors.full_messages.uniq) : [])
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

  def japanese
    @words = current_user.words.all.order("updated_at desc").paginate(:per_page => 100, :page => params[:page])
    if request.xhr?
      sleep(1)
      render :partial => "words/more_words_jp"
    end
  end

end
