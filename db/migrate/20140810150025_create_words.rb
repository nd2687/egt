class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.references :user, null: false
      t.string :english, null: false
      t.string :japanese, null: false
      t.boolean :complete, null: false, default: false

      t.timestamps
    end

    add_index :words, :user_id
  end
end
