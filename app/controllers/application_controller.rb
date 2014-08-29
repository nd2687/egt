class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :authenticate_user!
  #before_filter :correct_user

  class Forbidden < StandardError; end
  class NotFound < StandardError; end

  if Rails.env.production?
    rescue_from Exception, with: :rescue_500
    rescue_from ActionController::RoutingError, with: :rescue_404
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_404
  end

  rescue_from Forbidden, with: :rescue_403
  rescue_from NotFound, with: :rescue_404

  def rescue_403(exception)
    render "errors/forbidden", status: 403, layout: "error"
  end

  def rescue_404(exception)
    render "errors/not_found", status: 404, layout: "error"
  end

  def rescue_505(exception)
    render "errors/internal_server_error", status: 500, layout: "error"
  end

  private
  def correct_user
    @user = User.find(params[:id])
    redirect_to(root_path) unless current_user?(@user)
  end
end
