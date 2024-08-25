use reqwest::Error;

use crate::dto::common_response::CommonResponseDto;
pub struct EmailApiClient {
    api_url: String
}

impl EmailApiClient {
    pub fn new(api_url: String) -> EmailApiClient {
        EmailApiClient { api_url }
    }

    pub async fn check_email_existence(&self, email: &str) -> Result<bool, Error> {
        let mut api = self.api_url.clone();
        let endpoint = format!("/emails/existence?email={}", email);
        api.push_str(&endpoint);

        println!("{}",api);

        let resp = reqwest::get(&api).await?;

        if resp.status().is_success() {
            let body: CommonResponseDto<()> = resp.json().await?;
            return Ok(body.ok);
        }

        Ok(false) // Placeholder return value, this is failure
    }
}