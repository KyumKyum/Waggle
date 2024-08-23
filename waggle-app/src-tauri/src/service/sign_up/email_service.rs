use crate::api::api_clients::ApiClients;
use std::env;


#[tokio::main]
#[tauri::command]
pub async fn check_email_existence(email: &str) -> bool {
    //TODO: Send Check Request to Backend, and check duplication.

    let api_client_mutex = ApiClients::api_clients();
    let api_client = api_client_mutex.lock().unwrap();
    let resp = api_client.email_client().check_email_existence(email).await;
    match resp {
        Ok(status) => {
            return status;
        },
        Err(e) => {
            println!("ERROR!! {}",e);
            return false;
        }
    }
}