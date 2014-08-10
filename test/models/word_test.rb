# == Schema Information
#
# Table name: words
#
#  id         :integer          not null, primary key
#  english    :string(255)      not null
#  japanese   :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class WordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
