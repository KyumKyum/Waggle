// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use dotenv::from_filename;
use std::env;

fn main() {
    let environment = env::var("MODE").unwrap_or("development".to_string());

    let env_file = match environment.as_str() {
        "production" => ".env.production",
        _ => ".env.development"
    };

    from_filename(env_file).ok(); // Load env

    waggle_app_lib::run()
}
