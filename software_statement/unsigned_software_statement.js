module.exports = {
  "redirect_uris": [
    "https://porkhack.github.io/oauth2/redirect.html",
    "https://localhost:3000/oauth2/redirect.html",
  ],
  "token_endpoint_auth_method": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "token",
    "code",
    "id_token",
    "id_token token",
    "code id_token",
    "code token",
    "code id_token token"
  ],
  "client_name": "Open Ag Data Alliance",
  "client_uri": "https://github.com/porkhack",
  "contacts": [
    ""
  ],
  "jwks": {
    "keys": [
      {"kty":"RSA","kid":"cb397cf4660e42b1a20fc6f04401141b","e":"AQAB","n":"udfmv1y3X03-NlPsmwtzbvtaf96vNYVENgQWOFT08HcgexyB6ZGZYP8h4t_puT0PWVCP_Nmo8HnptBqyQMeYbQDxQOMQufEUciLBved5MzF0AXyt67agz-1_hQr9rBt2A4Qh9u-AvypiiZQ_JEuStXNrS8ixD1lSMQbXD4AFJKUrCsL_5RoWnlqQ-ASUR1W9M6nu9UsAKtg4xq6EnOIR9SCi1CxTv1BC6Nbm_JAl2rXRnj2xUM8U4TvtwhMV0MWWquw4wWuF1ogUbafQER6rhWbRl7fl4CnZP0ykJsIU6knW8cX0TtdWFuNkxuW1vjC2KsYUIdsNTqAbC3Cwoy-nbQ"}
    ]
  }
}
