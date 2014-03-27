require 'sinatra'
require 'open-uri'
require 'json'
require 'awesome_print'

class AppController < Sinatra::Base
  after do
    headers('Access-Control-Allow-Origin' => '*')
  end
  get '/' do
    'Stack Overflow Statistics'
  end

  get '/:id' do
    content_type 'application/json'
    Stats.new(params[:id]).retrieve
  end
end

class Stats
  def initialize(id)
    @id = id
    @details_url = "https://api.stackexchange.com/2.1/users/#{id}/?site=stackoverflow"
  end

  attr_reader :details_url, :id

  def retrieve
    raw_data = open(details_url).read
    # JSON.parse(raw_data, symbolize_names: true)
  end
end
