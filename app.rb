require 'sinatra'

class AppController < Sinatra::Base
  get '/' do
    'Stack Overflow Statistics'
  end
end
