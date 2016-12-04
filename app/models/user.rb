class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :todo_lists, dependent: :destroy
  has_many :todos, through: :todo_list

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true

end
