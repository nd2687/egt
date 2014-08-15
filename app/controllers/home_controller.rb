class HomeController < ApplicationController
  def index
    @words = current_user.words.all.order("updated_at DESC")
  end
end
