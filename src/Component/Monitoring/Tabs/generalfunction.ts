export const extractMetricData = (
        data: Array<{ [key: string]: any }>, // Данные с API
        metricName: string // Название метрики
    ) : number[] => {
        return data.map((item) => item[metricName] || 0); // Если метрика отсутствует, возвращаем 0
    };