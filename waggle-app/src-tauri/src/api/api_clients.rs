use crate::api::clients::email::EmailApiClient;
use std::env;
use once_cell::sync::Lazy;
use std::sync::Mutex;

pub struct ApiClients {
    email_client: EmailApiClient,
}

impl ApiClients {
    pub fn new() -> ApiClients {
       // let api_url = env::var("API_URL").expect("API_URL environment variable is not set"); //* FIXME */

        let api_url = "http://localhost:11000".to_string();
        let email_client = EmailApiClient::new(api_url);

        ApiClients {
            email_client,
        }
    }

    pub fn email_client(&self) -> &EmailApiClient {
        &self.email_client
    }
}

//* Make it singleton */

static API_CLIENTS: Lazy<Mutex<ApiClients>> = Lazy::new(||{
    let clients = ApiClients::new();  // Proper initialization of ApiClients
    Mutex::new(clients)
});

impl ApiClients {
    pub fn api_clients() -> &'static Mutex<ApiClients> {
        &*API_CLIENTS
    }
}
