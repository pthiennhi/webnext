
const BASE_URL = "https://iot.wyvernp.id.vn/api/v1/device"
export interface GetListParams {
	paging?: {
        pageIndex: number;
        pageSize: number;
    };
  sort?: {
    id: string, desc : boolean
  }[];
  keyword?: string;
	group?: string;
	provider?: string;
	createdDate?: {
		from?: Date
		to?:Date
	}
}
export const DeviceService = {
    getList : async ()=>{
        const response = await fetch(BASE_URL, {
            method : "GET",
        }).then (d => d.json());
        console.log({
            response
        });
        return response
    },
   
    getListByOwner : async (id:string | number, paging: GetListParams )=>{
        const response = await fetch(BASE_URL+"/owner/"+id, {
            method : "GET",
        }).then (d => d.json());
        // console.log({
        //     response
        // });
        return response
    },
}