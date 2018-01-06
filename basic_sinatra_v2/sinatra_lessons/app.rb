require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "hello world again"
end

get '/hello' do
  "hello1000!"
end

get '/hello' do
  "hello2"
end
