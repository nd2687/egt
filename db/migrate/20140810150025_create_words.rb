class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.references :devise_create_users, index: true
      t.string :english, null: false
      t.string :japanese, null: false

      t.timestamps
    end
  end
end
