import axios from 'axios';

const api_key = process.env.NEXT_PUBLIC_ZOTERO_API_KEY;
const user_id = process.env.NEXT_PUBLIC_ZOTERO_USER_ID;

type ZoteroGroup = {
  id: number;
};

type ZoteroItem = {
  key?: any;
  data?: {
    key?: any;
    contentType?: string;
    itemType?: string;
  };
  links?: {
    enclosure?: {
      type?: string;
      href: string;
    };
  };
  library?: {
    name?: string | any;
  };
  pdfUrl?: string;  // Allow adding the pdfUrl property
};

export const fetchGroups = async (): Promise<ZoteroGroup[]> => {
  try {
    const response = await axios.get(`https://api.zotero.org/users/${user_id}/groups`, {
      headers: {
        'Authorization': `Bearer ${api_key}`,
        'Content-Type': 'application/json'  // Correct content type for fetching groups
      }
    });

    // console.log(response, "RESPONSE DATA");

    if (response.status !== 200) {
      throw new Error(`Failed to fetch groups, status: ${response.status}`);
    }

    return response.data;
  } catch (error: any) {
    console.error('Error fetching Zotero groups:', error.message);
    throw error;
  }
};

export const fetchGroupItems = async (groupId: number): Promise<ZoteroItem[]> => {
  let url = `https://api.zotero.org/groups/${groupId}/items?limit=11`;

  try {
    const response = await axios.get<ZoteroItem[]>(url, {
      headers: {
        'Authorization': `Bearer ${api_key}`,
        'Content-Type': 'application/json'  // Correct content type for fetching items
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to fetch items from group ${groupId}, status: ${response.status}`);
    }

    const items: ZoteroItem[] = response.data;
    const newItems: ZoteroItem[] = []; 
    var count = 0

    items.forEach(item => {
      if (
        item.data?.contentType === 'application/pdf' &&
        item.links?.enclosure?.type === 'application/pdf'
      ) {
        // Transform the pdfUrl
        const transformedUrl = transformPdfUrl(
          item.links.enclosure.href,
          groupId.toString(),
          item.key,
          item?.library?.name || '',
          item?.data?.key || '',
          item
        );
        // Add the transformed URL to the item
        item.pdfUrl = transformedUrl;
        newItems.push(item);
      }
    });

    return newItems;
  } catch (error: any) {
    console.error(`Error fetching items from group ${groupId}:`, error.message);
    throw error;
  }
};

const transformPdfUrl = (
  pdfUrl: string,
  group_id: string,
  item_key: string,
  group_name: string,
  itemData_key: string,
  data: ZoteroItem
): string => {
  // Extract key from original pdfUrl
  const key = pdfUrl.split('/').pop() || '';

  // Construct the new URL format
  const newUrl = `https://www.zotero.org/groups/${group_id}/${group_name.toLowerCase()}/items/${item_key}/${data.data?.itemType}/${itemData_key}/reader`;

  return newUrl;
};