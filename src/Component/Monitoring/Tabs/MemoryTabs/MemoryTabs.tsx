import { useSelector } from "react-redux";
import MetricChart from "../../MetricChart/MetricHart";
import { extractMetricData } from "../generalfunction";
import { RootState } from "../../../../state/RootReduceer";
import { useEffect } from "react";

     const apiData = [
    {
      id: 1,
      memoryTotal: 16270,
      memoryUsed: 11546,
      memoryFree: 4724,
      memoryCached: 0,
      memoryUsedPercent: 70.95,
    },
    {
      id: 2,
      memoryTotal: 16270,
      memoryUsed: 11800,
      memoryFree: 4470,
      memoryCached: 0,
      memoryUsedPercent: 72.5,
    },
    {
      id: 3,
      memoryTotal: 16270,
      memoryUsed: 12000,
      memoryFree: 4270,
      memoryCached: 0,
      memoryUsedPercent: 73.75,
    },
  ];
  
export default function MemoryTAbs({ Timeout }){
        const jwt = useSelector((state: RootState) => state.auth.user.token);
        useEffect(()=>{
            
        },[])
        const memoryUsed = extractMetricData(apiData, "memoryUsed");
        const memoryTotal = extractMetricData(apiData, "memoryTotal");
        const memoryCached = extractMetricData(apiData, "memoryCached");
        const memoryFree = extractMetricData(apiData, "memoryFree");
        const memoryUsedPercent = extractMetricData(apiData, "memoryUsedPercent");
    return(
        <>
        <MetricChart
            title="Memory Used"
            data={memoryUsed}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
        />
        <MetricChart
            title="Memory Cached"
            data={memoryCached}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
            
        />
        <MetricChart
            title="Memory Free"
            data={memoryFree}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
            
        />
         <MetricChart
            title="Memory Used Percent"
            data={memoryUsedPercent}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
            
        />
        </>
    )
}