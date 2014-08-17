class HomeController < ApplicationController
  def index
    @words = current_user.words.all.order(:updated_at)
    @words = current_user.words.all.order(:updated_at).reverse_order
  end
end
