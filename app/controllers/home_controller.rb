class HomeController < ApplicationController
  def index
    sort_type = params[:sort_type].present? ? params[:sort_type] : "updated_at desc"
    complete = params[:complete_type] == "complete" ? true : false
    @words = current_user.words.all.where(complete: complete).order("#{sort_type}").
      paginate(:per_page => 100, :page => params[:page])
    @complete_count = current_user.words.all.where(complete: true).count
    @word_count = current_user.words.all.count
    if request.xhr?
      sleep(1)
      render :partial => "words/more_words"
    else
      render "words/index"
    end
  end
end
