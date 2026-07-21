'use server';

export async function uploadImageAction(base64File: string, fileName: string, folder: string) {
  try {
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY || '';
    if (!privateKey) {
      throw new Error('ImageKit Private Key is not configured on the server.');
    }

    const authHeader = 'Basic ' + Buffer.from(privateKey + ':').toString('base64');

    // Parse base64 string
    const base64Data = base64File.replace(/^data:image\/\w+;base64,/, "");
    
    const formData = new FormData();
    formData.append('file', base64Data);
    formData.append('fileName', fileName);
    formData.append('folder', folder);
    formData.append('useUniqueFileName', 'false');
    formData.append('isPrivateFile', 'false');

    const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
      method: 'POST',
      headers: {
        Authorization: authHeader
      },
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`ImageKit Upload Error (HTTP ${response.status}): ${errorText}`);
    }

    const data = await response.json();
    return { success: true, url: data.url, fileId: data.fileId };
  } catch (error: any) {
    console.error('Server Action Upload Error:', error);
    return { success: false, error: error.message || 'Server upload failed.' };
  }
}
