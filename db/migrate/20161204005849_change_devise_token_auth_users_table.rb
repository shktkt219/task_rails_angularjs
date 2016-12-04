class ChangeDeviseTokenAuthUsersTable < ActiveRecord::Migration
  def change
    change_table(:users) do |t|
      t.remove :provider, :uid
    end
  end
end
