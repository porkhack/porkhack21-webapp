const SCOPE = 'all:all';
const METADATA = 'eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHA6Ly92aXAzLmVjbi5wdXJkdWUuZWR1OjgwMDAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiLCJodHRwOi8vbG9jYWxob3N0OjgwMDAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiXSwidG9rZW5fZW5kcG9pbnRfYXV0aF9tZXRob2QiOiJ1cm46aWV0ZjpwYXJhbXM6b2F1dGg6Y2xpZW50LWFzc2VydGlvbi10eXBlOmp3dC1iZWFyZXIiLCJncmFudF90eXBlcyI6WyJpbXBsaWNpdCJdLCJyZXNwb25zZV90eXBlcyI6WyJ0b2tlbiIsImlkX3Rva2VuIiwiaWRfdG9rZW4gdG9rZW4iXSwiY2xpZW50X25hbWUiOiJPcGVuQVRLIiwiY2xpZW50X3VyaSI6Imh0dHBzOi8vdmlwMy5lY24ucHVyZHVlLmVkdSIsImNvbnRhY3RzIjpbIlNhbSBOb2VsIDxzYW5vZWxAcHVyZHVlLmVkdT4iXSwic29mdHdhcmVfaWQiOiIxZjc4NDc3Zi0zNTQxLTQxM2ItOTdiNi04NjQ0YjRhZjViYjgiLCJyZWdpc3RyYXRpb25fcHJvdmlkZXIiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbSIsImlhdCI6MTUxMjAwNjc2MX0.AJSjNlWX8UKfVh-h1ebCe0MEGqKzArNJ6x0nmta0oFMcWMyR6Cn2saR-oHvU8WrtUMEr-w020mAjvhfYav4EdT3GOGtaFgnbVkIs73iIMtr8Z-Y6mDEzqRzNzVRMLghj7CyWRCNJEk0jwWjOuC8FH4UsfHmtw3ouMFomjwsNLY0';
const REDIRECT = 'https://porkhack.github.io/porkhack21-webapp/oauth2/redirect.html';
const TOKEN = 'b24b7832c75e464b98cb5e725fbaa835';

let oadaDomain = '';

let OPTIONS = {
    redirect: REDIRECT,
    metadata: METADATA,
    scope: SCOPE
};

export default {
  OPTIONS,
  REDIRECT,
  METADATA,
  SCOPE,
  oadaDomain,
  TOKEN
}
