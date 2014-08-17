class HomeController < ApplicationController
  def index
    @words = current_user.words.all.order(:updated_at).reverse_order
  end

  def reverse
    @words = current_user.words.all.order(:updated_at)
  end
end
