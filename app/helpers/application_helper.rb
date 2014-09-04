module ApplicationHelper
  def pageless(total_pages, url=nil, container=nil)
    opts = { :totalPages => total_pages,
             :url => url,
             :loaderMsg => '',
             :loaderImage => image_path("loader.gif")
          }
    container && opts[:container] ||= container
    javascript_tag("$('div.words').pageless(#{opts.to_json});")
  end

  def check_twitter(email)
    if current_user.provider == "twitter"
      email = "Twitter Authentication"
    else
      email
    end
  end
end
