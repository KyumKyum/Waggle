#[derive(serde::Deserialize)]
pub struct CommonResponseDto<T> {
    pub ok: bool,
    pub message: Option<String>,
    pub data: Option<T>
}