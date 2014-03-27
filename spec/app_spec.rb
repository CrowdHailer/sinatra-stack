require 'spec_helper'

describe 'Main Router' do
  include Rack::Test::Methods

  def app
    AppController
  end

  it 'Should respond Ok on homepage' do
    get '/'
    expect(last_response).to be_ok
  end

  context 'working stats object' do
    let(:stats) { Stats.new('1187299') }
    let(:url) { 'https://api.stackexchange.com/2.1/users/1187299/?site=stackoverflow' }

    it 'should know the users details uri' do
      expect(stats.details_url).to eq(url)
    end

    # it 'should request latest stackoverflow data' do
    #   stub_request(:any, url)
    #     .to_return(File.new('spec/fixtures/user_details.txt'))
    #   data = stats.retrieve
    #   expect(data).to include(:items)
    # end

    it 'should return the stackoverflow data' do
      stub_request(:any, url)
        .to_return(File.new('spec/fixtures/user_details.txt'))
      get '/1187299'
      expect(last_response.headers['Content-Type']).to eq('application/json;charset=utf-8')
      expect(last_response.body).to include('items')
    end
  end
end
