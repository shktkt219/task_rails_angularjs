module Api
   class TodoListController < ApplicationController
     def show
       @todo_list = TodoList.find(params[:id])
     end
   end
end
