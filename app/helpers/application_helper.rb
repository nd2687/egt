module ApplicationHelper
  def pageless(total_pages, url=nil, container=nil)
    opts = { :totalPages => total_pages,
             :url => url,
             :loaderMsg => 'now loading',
             :loaderImage => image_path("loader.gif")
          }
    container && opts[:container] ||= container
    javascript_tag("$('div.words').pageless(#{opts.to_json});")
  end
end
