
const BASE_URL = "https://iot.wyvernp.id.vn/api/v1/collected-data"
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
export const DataService = {
    getList : async ()=>{
        const response = await fetch(BASE_URL, {
            method : "GET",
        }).then (d => d.json());
        console.log({
            response
        });
        return response
    },
   
    getListKey : async (keyword?:string, paging?: GetListParams )=>{
        const response = await fetch(BASE_URL+`?KeySearch=${keyword??""}&OrderBy=CreatedDate:desc`, {
            method : "GET",
        }).then (d => d.json());
        return response
    },
}