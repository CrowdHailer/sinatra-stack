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

  it 'Should create a stats object with user id' do
    expect(Stats).to receive(:new).with('20')
    get '/20'
  end

  context 'working stats object' do
    let(:stats) { Stats.new('1187299') }
    let(:url) { 'https://api.stackexchange.com/2.1/users/1187299/?site=stackoverflow' }

    it 'should know the users details uri' do
      expect(stats.details_url).to eq(url)
    end

    it 'should request latest stackoverflow data' do
      data = stats.retrieve
      expect(data).to include(:badges)
    end
  end
end
