pub struct EmailApiClient {
    api_url: String
}

impl EmailApiClient {
    pub fn new(api_url: String) -> EmailApiClient {
        EmailApiClient { api_url }
    }

    pub async fn check_email_existence(&self, email: &str) -> Result<bool, String> {
        let mut api = self.api_url.clone();
        let endpoint = format!("/emails/existence?email={}", email);
        api.push_str(&endpoint);

        println!("{}",api);

        let resp = reqwest::get(&api).await;

        match resp {
            Ok(response) => {
                println!("Response status: {}", response.status());
            },  // Directly pass through the successful response
            Err(e) => {
                return Err(e.to_string());
            }
        };

        // TODO: Implement the actual logic to determine email existence
        

        Ok(true) // Placeholder return value
    }
}