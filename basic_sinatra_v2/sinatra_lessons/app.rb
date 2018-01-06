require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "hello world again"
end

get '/hello/:fname/?:lname?' do |f, l|
  "hello #{f} #{l}"
end
