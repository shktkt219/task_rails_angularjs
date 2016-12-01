module Api
   class TodoListsController < ApplicationController
     def show
       @todo_list = TodoList.find(params[:id])
       render json: @todo_list, status: 201
     end
   end
end
