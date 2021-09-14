require 'faraday'

conn = Faraday.new do |conn|
  conn.options.timeout = 1
  conn.request(:retry, max: 2)
end

response = conn.get('http://localhost')

pp response.body

