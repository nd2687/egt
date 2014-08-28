class WordsController < ApplicationController

  def new
    @word = current_user.words.new
  end

  def create
    @word = current_user.words.new(user_id: params[:user_id],
                     english: params[:english], japanese: params[:japanese])
    if @word.save
      render json: [ @word.english, @word.japanese, @word.id ]
    else
      render json: (@word.errors.present? ? ([false] + @word.errors.full_messages.uniq) : [])
    end
  end

  def edit
    @word = current_user.words.find(params[:id])
    render json: [ @word.english, @word.japanese ]
  end

  def update
    @word = current_user.words.find(params[:id])
    @word.assign_attributes(english: params[:english], japanese: params[:japanese])
    if @word.save
      render json: [ @word.english, @word.japanese ]
    else
      render json: (@word.errors.present? ? ([false] + @word.errors.full_messages.uniq) : [])
    end
  end

  def destroy
    @word = current_user.words.find(params[:id])
    if @word.delete
      render json: { success: true }
    end
  end

  def complete
    @word = current_user.words.find(params[:id])
    @word.complete = true
    @word.save
    render json: { success: true }
  end
end
