#[tokio::main]
#[tauri::command]
pub async fn check_email_dup(email: &str) -> bool {
    //TODO: Send Check Request to Backend, and check duplication.
    println!("{}", email);
    true // validated
}