https://api.instagram.com/oauth/authorize/?client_id=4557797146124a19875aa7159e2810c6&redirect_uri=http://jordancharmon.com&response_type=code

curl -F 'client_id=4557797146124a19875aa7159e2810c6' \
  -F 'client_secret=ffedcd023e094b6bacc0aa92abbb12c5' \
  -F 'grant_type=authorization_code' \
  -F 'redirect_uri=http://jordancharmon.com' \
  -F 'code=d4b41d59c57d4a268c3ea1cf46eee043' \
  https://api.instagram.com/oauth/access_token
