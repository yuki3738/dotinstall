require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "hello world again"
end

get %r{/users/([0-9]*)} do
  "user id = #{params[:captures][0]}"
end
