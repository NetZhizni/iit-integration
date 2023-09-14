// eslint-disable-next-line import/prefer-default-export
export class FileConverter {
  static toBase64(file: File | Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const { result } = reader;
        const base64 = String(result).split(',')[1];
        resolve(base64);
      };

      reader.readAsDataURL(file as Blob);
      reader.onerror = reject;
    });
  }

  static toArrayBuffer(file: File): Promise<{ file: File, data: Uint8Array }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState !== FileReader.DONE) { return; }

        resolve({
          file,
          data: new Uint8Array(reader.result as ArrayBufferLike),
        });
      };
      reader.readAsArrayBuffer(file);
      reader.onerror = reject;
    });
  }
}
