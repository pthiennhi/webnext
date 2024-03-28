import { DeviceService } from '@/services/devices';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'

type Props = {
    ownerId?: string | number
}

const useDevices = ({ownerId}: Props) => {
    const [pagination, setPagination] = useState<{
        pageIndex : number,
        pageSize: number
    }>({
        pageIndex: 0,
        pageSize: 10,
      });
      const [sortState, setSortState] = useState<{id: string, desc: boolean}[]>([]);
      const [keyword, setKeyword] = useState<string>();
      const [totalRows, setTotalRows] = useState<number>(0);
      const fetchDataFunction = async () => {
        try {
          const response:any = await DeviceService.getListByOwner(ownerId,{
            paging: pagination, // Pass the pagination state
            sort: sortState, // Pass the sort state
            keyword, // Pass the keyword
          });
          console.log({
            response
          });
    
          setTotalRows(response?.totalCount ?? 0);
          // Return the data from the response
          return response?.data ?? [];
          // return []
        } catch (e) {
          console.log(e);
          throw e;
        }
      };
    
      // TODO: use debounce technique to prevent many calls at a short time
      const queryKey = [pagination, sortState, keyword, ownerId];
      // const debounceQueryKey = useDebounce(queryKey, 300)
      const query = useQuery(
        {
        queryKey :["devices", queryKey],
           queryFn:  fetchDataFunction,
           enabled: !!ownerId
        }
        
      );
    
      return {
        ...query,
        setSortState,
        setKeyword,
        setPagination,
        // setFilter,
        keyword,
        totalRows,
        // filter,
      };
}

export default useDevices