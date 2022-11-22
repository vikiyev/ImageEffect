use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
  // decode base 64
  let base64_to_vector = decode(encoded_file).unwrap();
  log(&"Image decoded".into());

  // load image from memory
  let mut img = load_from_memory(&base64_to_vector).unwrap();
  log(&"Image loaded".into());

  // grayscale the image
  img = img.grayscale();
  log(&"Grayscale applied".into());

  // buffer image
  let mut buffer = vec![];
  img.write_to(&mut buffer, Png).unwrap();
  log(&"New image written".into());

  // encode into base64
  let encoded_img = encode(&buffer);
  // convert to data url including metadata
  let data_url = format!(
    "data:image/png;base64,{}",
    encoded_img
  );

  return data_url;
}