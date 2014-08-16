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

  validates :english, presence: true, length: { maximum: 21 },
    format: { with: /\A[0-9A-Za-z\s]+\z/, on: :create }
  validates :japanese, presence: true, length: { maximum: 12 },
    format: { with: /\A[^\x01-\x7E]+\z/, on: :create }
end
