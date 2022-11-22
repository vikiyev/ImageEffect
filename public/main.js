async function init() {
  let rustApp = null;

  try {
    rustApp = await import("../pkg/index.js");
  } catch (error) {
    console.error(error);
    return;
  }

  console.log(rustApp);

  const input = document.getElementById("upload");
  const fileReader = new FileReader();

  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input.files[0]);

    fileReader.onloadend = () => {
      // convert to base64 and remove metadata from the result
      const base64 = fileReader.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ""
      );
      let img_data_url = rustApp.grayscale(base64);
      document.getElementById("new-img").setAttribute("src", img_data_url);
    };
  });
}

init();
