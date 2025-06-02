import { useSelector } from "react-redux";
import { RootState } from "../../../../state/RootReduceer";
import { useEffect } from "react";
import MetricChart from "../../MetricChart/MetricHart";
import { extractMetricData } from "../generalfunction";

export default function CPUTAbs({ Timeout }){

      const jwt = useSelector((state: RootState) => state.auth.user.token);

    return(
        <>
        <MetricChart
        title="Memory Used"
        data={memoryUsed}
        description="Это показатель загрузки процессора в процентах. Высокие значения могут указывать на перегрузку системы."
        limit={memoryTotal[0]}
      />
        </>
    )
}