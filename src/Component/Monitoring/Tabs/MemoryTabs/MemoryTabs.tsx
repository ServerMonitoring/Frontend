import { useSelector } from "react-redux";
import MetricChart from "../../MetricChart/MetricHart";
import { addTimeToCurrent, calculateTimeIntervals, extractMetricData } from "../generalfunction";
import { RootState } from "../../../../state/RootReduceer";
import { useEffect, useState } from "react";
import { getMemoryMetrics } from "../../../../API/metric";

 
export default function MemoryTAbs({ Timeout }){
        const jwt = useSelector((state: RootState) => state.auth.user.token);
        const [data, setData] = useState<any[]>([]);
        const now = new Date();
        const startTime = new Date(now.getTime() - 1 * 60 * 1000);
        console.log("Начальное время"+ startTime)
        const endTime = addTimeToCurrent(Timeout)
        console.log("конечно время"+ endTime)
        const id = extractLastNumberFromURL(window.location.href);
  function extractLastNumberFromURL(url: string): number | null {
    const matches = url.match(/\d+/g);
    return matches && matches.length > 0 ? parseInt(matches[matches.length - 1], 10) : null;
  }
  // Функция для загрузки данных
  const fetchData = async () => {
    try {
        await getMemoryMetrics(id,startTime,endTime,jwt)
        .then((response)=>{
            console.log(response)
            setData(response)
        })
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };
      useEffect(() => {
            fetchData(); // Загружаем данные при монтировании

            const intervalId = setInterval(() => {
            fetchData(); // Загружаем данные каждую минуту

            }, 60000); // 60000 мс = 1 минута

    // Очистка интервала при размонтировании
    return () => clearInterval(intervalId);
  }, []);
        const memoryUsed = extractMetricData(data, "memoryUsed");
        const memoryTotal = extractMetricData(data, "memoryTotal");
        const memoryCached = extractMetricData(data, "memoryCached");
        const memoryFree = extractMetricData(data, "memoryFree");
        const memoryUsedPercent = extractMetricData(data, "memoryUsedPercent");
        const time = calculateTimeIntervals(startTime.toISOString(),endTime,data.length || 1)
    return(
        <>
        <MetricChart
            title="Memory Used"
            data={memoryUsed}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
            time={time}
        />
        <MetricChart
            title="Memory Cached"
            data={memoryCached}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
            time={time}
            
        />
        <MetricChart
            title="Memory Free"
            data={memoryFree}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
            time={time}
            
        />
         <MetricChart
            title="Memory Used Percent"
            data={memoryUsedPercent}
            description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
            limit={memoryTotal[0]}
            time={time}
            
        />
        </>
    )
}