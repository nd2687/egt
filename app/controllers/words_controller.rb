class WordsController < ApplicationController

  def new
    @word = Word.new
  end

  def create
    @word = Word.new(user_id: params[:user_id],
                     english: params[:english], japanese: params[:japanese])
    if @word.save
      render json: [ @word.english, @word.japanese ]
    else
      render json: (@word.errors.present? ? ([false] + @word.errors.full_messages.uniq) : [])
    end
  end

  def edit
    @word = Word.find(params[:id])
    render json: [ @word.english, @word.japanese ]
  end

  def update
    @word = Word.find(params[:id])
    @word.assign_attributes(english: params[:english], japanese: params[:japanese])
    if @word.save
      render json: [ @word.english, @word.japanese ]
    else
      render json: (@word.errors.present? ? ([false] + @word.errors.full_messages.uniq) : [])
    end
  end

  def destroy
    @word = Word.find(params[:id])
    if @word.delete
      render json: { success: true }
    end
  end
end
