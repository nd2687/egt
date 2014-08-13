# == Schema Information
#
# Table name: words
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  english    :string(255)      not null
#  japanese   :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class Word < ActiveRecord::Base
  belongs_to :user
end
