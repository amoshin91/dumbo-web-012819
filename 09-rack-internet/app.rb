require 'pry'

class App

  def call(environment_hash)

    status_code = 200
    header = { "Content-type" =>  "text/html" }

    if environment_hash["REQUEST_PATH"] == "/lunch"
      body = ['potato'] # or {}
    else
      body = ["hello world"]
    end

    return [status_code, header, body]
  end



end
