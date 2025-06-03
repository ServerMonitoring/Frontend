import { useSelector } from "react-redux";
import { RootState } from "../../../../state/RootReduceer";
import { useEffect } from "react";
import MetricChart from "../../MetricChart/MetricHart";
import { extractMetricData } from "../generalfunction";

const apidata =[
    {
        "id": 7,
        "cpuPercentTotalLoad": 5.5,
        "cpuTimeUser": 4.422,
        "cpuTimeSystem": 4.125,
        "cpuTimeIdle": 163.953,
        "cpuTimeInterrupt": 0.266,
        "cpuTimeDpc": 0.234,
        "ctxSwitches": 384635,
        "interrupts": 290642,
        "softInterrupts": 0,
        "syscalls": 1147779,
        "currentFreq": 3401.0,
        "cores": [
            {
                "coreIndex": 1,
                "corePercentLoad": 10.36
            },
            {
                "coreIndex": 2,
                "corePercentLoad": 2.96
            },
            {
                "coreIndex": 3,
                "corePercentLoad": 17.17
            },
            {
                "coreIndex": 4,
                "corePercentLoad": 3.38
            },
            {
                "coreIndex": 5,
                "corePercentLoad": 11.55
            },
            {
                "coreIndex": 6,
                "corePercentLoad": 8.36
            },
            {
                "coreIndex": 7,
                "corePercentLoad": 2.38
            },
            {
                "coreIndex": 8,
                "corePercentLoad": 3.08
            },
            {
                "coreIndex": 9,
                "corePercentLoad": 1.9
            },
            {
                "coreIndex": 10,
                "corePercentLoad": 1.35
            },
            {
                "coreIndex": 11,
                "corePercentLoad": 2.66
            },
            {
                "coreIndex": 12,
                "corePercentLoad": 1.47
            },
            {
                "coreIndex": 13,
                "corePercentLoad": 2.52
            },
            {
                "coreIndex": 14,
                "corePercentLoad": 2.21
            },
            {
                "coreIndex": 15,
                "corePercentLoad": 9.14
            },
            {
                "coreIndex": 16,
                "corePercentLoad": 7.5
            }
        ]
    },    {
        "id": 8,
        "cpuPercentTotalLoad": 5.5,
        "cpuTimeUser": 4.422,
        "cpuTimeSystem": 4.125,
        "cpuTimeIdle": 163.953,
        "cpuTimeInterrupt": 0.266,
        "cpuTimeDpc": 0.234,
        "ctxSwitches": 384635,
        "interrupts": 290642,
        "softInterrupts": 0,
        "syscalls": 1147779,
        "currentFreq": 3401.0,
        "cores": [
            {
                "coreIndex": 1,
                "corePercentLoad": 10.36
            },
            {
                "coreIndex": 2,
                "corePercentLoad": 2.96
            },
            {
                "coreIndex": 3,
                "corePercentLoad": 17.17
            },
            {
                "coreIndex": 4,
                "corePercentLoad": 3.38
            },
            {
                "coreIndex": 5,
                "corePercentLoad": 11.55
            },
            {
                "coreIndex": 6,
                "corePercentLoad": 8.36
            },
            {
                "coreIndex": 7,
                "corePercentLoad": 2.38
            },
            {
                "coreIndex": 8,
                "corePercentLoad": 3.08
            },
            {
                "coreIndex": 9,
                "corePercentLoad": 1.9
            },
            {
                "coreIndex": 10,
                "corePercentLoad": 1.35
            },
            {
                "coreIndex": 11,
                "corePercentLoad": 2.66
            },
            {
                "coreIndex": 12,
                "corePercentLoad": 1.47
            },
            {
                "coreIndex": 13,
                "corePercentLoad": 2.52
            },
            {
                "coreIndex": 14,
                "corePercentLoad": 2.21
            },
            {
                "coreIndex": 15,
                "corePercentLoad": 9.14
            },
            {
                "coreIndex": 16,
                "corePercentLoad": 7.5
            }
        ]
    },
]

export default function CPUTAbs({ Timeout }){

      const jwt = useSelector((state: RootState) => state.auth.user.token);

    return(
        <>

        </>
    )
}