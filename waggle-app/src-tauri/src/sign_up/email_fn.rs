use std::env;

#[tokio::main]
#[tauri::command]
pub async fn check_email_dup(email: &str) -> bool {
    //TODO: Send Check Request to Backend, and check duplication.
    let api = env::var("BE_API").expect("BE_API must set!");
    println!("{}", email);
    println!("{}", api);
    true // validated
}