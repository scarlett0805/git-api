const axios = require('axios')
url = "http://my.gitlab.com/api/v3/projects/12/repository/files?private_token=4S3JrHunQH7RTTCg9e8J&file_path=mydir/myfile&ref=master"
axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  })