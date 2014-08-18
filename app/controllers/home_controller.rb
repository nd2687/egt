class HomeController < ApplicationController
  def index
    #case params[:sort_type]
    #when 'reverse'
    #  @words = current_user.words.all.order(:updated_at)
    #when 'alphabet'
    #  @words = current_user.words.all.order(:english)
    #else
    #  @words = current_user.words.all.order(:updated_at).reverse_order
    #end
    sort_type = params[:sort_type].present? ? params[:sort_type] : "updated_at desc"
    @words = current_user.words.all.order("#{sort_type}")
  end
end
