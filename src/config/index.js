const SCOPE = "all:all";
const METADATA =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InluMjJ1akJVQ0VlbE5VUnJhOW9na2hlRDJLRVhvbGprc21BVnFGcTBMUGciLCJqd2siOnsia3R5IjoiUlNBIiwia2lkIjoieW4yMnVqQlVDRWVsTlVScmE5b2draGVEMktFWG9samtzbUFWcUZxMExQZyIsIm4iOiJycjM4aUs4RmkwXy1DUkxUdlZLNElJQ2xhcmlpNndWSHBFN3paUFhvRVJsX09vaDY0WW1iUWNSYTVlRncwVVFoVXZFQ2hLdTlObzNqbTdMVzlaY0wxSEtyaGtVVy1PUW9iT1hVbnJDZ29DcGE4VlloX3dSSWRRWWJzdlBRVmo1Tkd1dU5YYVpCX19weEZ5LW5fTzJJTVM4T0dyZXptM2JRSERBZi1qbmdJaFpHWmdMYXZMSnlTSFV5RFFMNEZiUTZEM1F6M0FNT3J4RnZhNEtCSVBDUUtGT21ZWFZuNHp0Z1Q2OGhneU1vYzFLeXR4b1JnelZIbkNkVHBQV1dWcm5NRmNKZWRZRC1MbWswWG81cmpZT3htcThBMWVqZnhQTWVSXzNWNzhBSmsyTERJNHZHYUozZm5hUFpTN0N2VzhGM3BXV2lqX0J5VkdDSS01QnJrcUhfblEiLCJlIjoiQVFBQiJ9fQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vcG9ya2hhY2suZ2l0aHViLmlvL3BvcmtoYWNrMjEtd2ViYXBwL29hdXRoMi9yZWRpcmVjdC5odG1sIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9vYXV0aDIvcmVkaXJlY3QuaHRtbCJdLCJ0b2tlbl9lbmRwb2ludF9hdXRoX21ldGhvZCI6InVybjppZXRmOnBhcmFtczpvYXV0aDpjbGllbnQtYXNzZXJ0aW9uLXR5cGU6and0LWJlYXJlciIsImdyYW50X3R5cGVzIjpbImF1dGhvcml6YXRpb25fY29kZSJdLCJyZXNwb25zZV90eXBlcyI6WyJ0b2tlbiIsImNvZGUiLCJpZF90b2tlbiIsImlkX3Rva2VuIHRva2VuIiwiY29kZSBpZF90b2tlbiIsImNvZGUgdG9rZW4iLCJjb2RlIGlkX3Rva2VuIHRva2VuIl0sImNsaWVudF9uYW1lIjoiT3BlbiBBZyBEYXRhIEFsbGlhbmNlIiwiY2xpZW50X3VyaSI6Imh0dHBzOi8vZ2l0aHViLmNvbS9wb3JraGFjayIsImNvbnRhY3RzIjpbIiJdLCJqd2tzIjp7ImtleXMiOlt7Imt0eSI6IlJTQSIsImtpZCI6ImNiMzk3Y2Y0NjYwZTQyYjFhMjBmYzZmMDQ0MDExNDFiIiwiZSI6IkFRQUIiLCJuIjoidWRmbXYxeTNYMDMtTmxQc213dHpidnRhZjk2dk5ZVkVOZ1FXT0ZUMDhIY2dleHlCNlpHWllQOGg0dF9wdVQwUFdWQ1BfTm1vOEhucHRCcXlRTWVZYlFEeFFPTVF1ZkVVY2lMQnZlZDVNekYwQVh5dDY3YWd6LTFfaFFyOXJCdDJBNFFoOXUtQXZ5cGlpWlFfSkV1U3RYTnJTOGl4RDFsU01RYlhENEFGSktVckNzTF81Um9XbmxxUS1BU1VSMVc5TTZudTlVc0FLdGc0eHE2RW5PSVI5U0NpMUN4VHYxQkM2TmJtX0pBbDJyWFJuajJ4VU04VTRUdnR3aE1WME1XV3F1dzR3V3VGMW9nVWJhZlFFUjZyaFdiUmw3Zmw0Q25aUDB5a0pzSVU2a25XOGNYMFR0ZFdGdU5reHVXMXZqQzJLc1lVSWRzTlRxQWJDM0N3b3ktbmJRIn1dfX0.i1cD2NwsMKbXBl2jBxjQraO97jeB_JMVjEKCNJA1xp94-x-Zv-CmKFItvc0PsqoCPeHNU8SJ2UCxO02athA0MCacIwMNpc34DBgyvdKXMUdf9aeiMi7R3X_6QZAJXSvK2G5imCJS-NnyVwqWbVVWUcGbUrLuXFhyVs9GYXw5hdolcT8QPzQZdgnmolLh2grIxErNgEMuix5qfDJSjVPbKyI-2rhLsRoAzkjWgtm99m9Leex6850T0So__UEh9eRisJhiZ55oOgXT5yeoDaCA8QTlZCm1IDydMNxkif-oKQEyxN3kYYcJ4oYrv1EJ0lLgTTUmNRXQJvwzS5wSsaVHNA";
//const REDIRECT = "https://localhost:3000/oauth2/redirect.html";
const REDIRECT = "https://porkhack.github.io/porkhack21-webapp/oauth2/redirect.html";

//let certid = '10942'

let oadaDomain = "";

let OPTIONS = {
  redirect: REDIRECT,
  metadata: METADATA,
  scope: SCOPE,
};

let config = {
  OPTIONS,
  REDIRECT,
  METADATA,
  SCOPE,
  oadaDomain,
};

export default config;
