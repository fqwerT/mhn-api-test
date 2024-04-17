const workerUpload = () => {
  function loadFile(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const binaryString = new Uint8Array(e.target.result as any);

      postMessage(binaryString);
    };

    reader.readAsBinaryString(file);
  }

  onmessage = function (e) {
    const file = e.data;

    loadFile(file);
  };
};

let code = workerUpload.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
const blob = new Blob([code], { type: "application/javascript" });

export const workerScript = URL.createObjectURL(blob);
