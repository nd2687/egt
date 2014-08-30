# == Schema Information
#
# Table name: words
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  english    :string(255)      not null
#  japanese   :string(255)      not null
#  complete   :boolean          default(FALSE), not null
#  created_at :datetime
#  updated_at :datetime
#

class Word < ActiveRecord::Base
  belongs_to :user

  validates :english, presence: { message: 'を入力してください。' },
    length: { maximum: 21, message: 'は最大21文字までです。' },
    format: { with: /\A[0-9A-Za-z\s]+\z/,message: 'は半角英数字を入力してください。' }
  validates :japanese, presence: { message: 'を入力してください。' },
    length: { maximum: 12, message: 'は最大12文字までです。' },
    format: { with: /\A[^\x01-\x7E]+\z/, message: 'は全角ひらがな、漢字、数字、半角カタカナを入力してください。' }
  #同じユーザーIDでenglishカラムをユニーク制約
  validates_uniqueness_of :english, :scope => :user_id,
                          :message =>"が既に存在しています。"

  before_save do
    self.english = english.strip if english.present?
    self.japanese = japanese.strip if japanese.present?
  end
end
