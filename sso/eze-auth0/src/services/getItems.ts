import axios from 'axios'
import { getItems } from '../controllers/item.controller';

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

const BaseUrl = 'https://api.zotero.org';
const ApiKey = 'ljJwZLSkS26ymt6DFd5D2Blc';
const UserId = '14487670';
const GroupId = '5577831';


export const fetchGroupItems = async (groupId: number): Promise<ZoteroItem[]> => {
    let url = `https://api.zotero.org/groups/${groupId}/items?limit=11`;
  
    try {
      const response = await axios.get<ZoteroItem[]>(url, {
        headers: {
          'Authorization': `Bearer ${ApiKey}`,
          'Content-Type': 'application/json'
        },
      });
  
      if (response.status !== 200) {
        throw new Error(`Failed to fetch items from group ${groupId}, status: ${response.status}`);
      }
  
      const items: ZoteroItem[] = response.data;

      const transformedItems: ZoteroItem[] = [];
  
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
          transformedItems.push(item);
        }
      });

    const newItems = getItems(transformedItems)

    return newItems
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