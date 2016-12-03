class TodoList < ActiveRecord::Base
  has_many :todos, dependent: :destroy
  belongs_to :user

  validates :name, presence: true
end
