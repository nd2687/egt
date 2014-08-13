class HomeController < ApplicationController
  def index
    @words = current_user.words.all
  end
end
