class HomeController < ApplicationController
  def index
    sort_type = params[:sort_type].present? || params[:sort_type] == "japanese" ?
      params[:sort_type] : "updated_at desc"
    if params[:complete_type]
      @words = current_user.words.all.where(complete: true).order("#{sort_type}").
        paginate(:per_page => 100, :page => params[:page])
    else
      @words = current_user.words.all.where(complete: false).order("#{sort_type}").
        paginate(:per_page => 100, :page => params[:page])
    end
    if request.xhr?
      sleep(1)
      render :partial => "words/more_words"
    else
      render "words/index"
    end
  end
end
