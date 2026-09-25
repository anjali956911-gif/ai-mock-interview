var client = new HttpClient();
var request = new HttpRequestMessage();

request.RequestUri = new Uri("http://localhost:5001/api/auth/register");
request.Method = HttpMethod.Post;

request.Headers.Add("Accept", "*/*");
request.Headers.Add("User-Agent", "Thunder Client (https://www.thunderclient.com)");

var bodyString = @"{
  ""fullName"": ""Anjali Yadav"",
  ""email"": ""ay775611757@gmail.com"",
  ""phone"": ""9876543210"",
  ""password"": ""123456""
}";

request.Content = new StringContent(bodyString, Encoding.UTF8, "application/json");

var response = await client.SendAsync(request);
var result = await response.Content.ReadAsStringAsync();

Console.WriteLine(result);