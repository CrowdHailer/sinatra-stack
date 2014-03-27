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
end
