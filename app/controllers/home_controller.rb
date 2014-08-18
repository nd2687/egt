class HomeController < ApplicationController
  def index
    sort_type = params[:sort_type].present? ? params[:sort_type] : "updated_at desc"
    @words = current_user.words.all.order("#{sort_type}").paginate(:per_page => 100, :page => params[:page])
    if request.xhr?
      sleep(1)
      render :partial => "words/more_words"
    end
  end
end
