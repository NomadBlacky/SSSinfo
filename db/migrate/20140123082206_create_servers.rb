class CreateServers < ActiveRecord::Migration
  def change
    create_table :servers do |t|
      t.boolean :meteor
      t.integer :level
      t.string :name
      t.string :file_path

      t.timestamps
    end
  end
end
