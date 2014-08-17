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

  validates :english, presence: { message: 'presence NG' }, length: { maximum: 21, message: 'length NG' },
    format: { with: /\A[0-9A-Za-z\s]+\z/, on: :create, message: 'format NG' }
  validates :japanese, presence: { message: 'presence NG' }, length: { maximum: 12, message: 'length NG' },
    format: { with: /\A[^\x01-\x7E]+\z/, on: :create, message: 'format NG' }
end
