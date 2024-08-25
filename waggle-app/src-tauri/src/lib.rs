mod service;
mod api;
mod dto;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            service::sign_up::check_email_existence
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
