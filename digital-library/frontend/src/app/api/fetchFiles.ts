const fetchFile = async (url: string, groupId: any, itemId: any, token: any) => {
    try {
      const response = await fetch(`${url}/groups/${groupId}/items/${itemId}/file`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          responseType:'stream'
        },
      });

      console.log(response, 'this is my response')
      
      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Network response was not ok: ${response.status} - ${errorDetails}`);
      }
  
      const fileBlob = await response.blob();
      const fileURL = URL.createObjectURL(fileBlob);
  
      return fileURL;
    } catch (error) {
      console.error('Error downloading the file:', error);
      throw error;
    }
  };
  
  export default fetchFile;
  