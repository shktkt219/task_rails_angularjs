module Api
   class TodoListsController < ApplicationController
     def show
       @todo_list = TodoList.find(params[:id])
       respond_to do |f|
         f.json { render json: @todo_list }
       end
     end
   end
end
