import axios, { AxiosInstance } from 'axios';

// Базовые интерфейсы
interface BaseCriteria {
  id?: number; // ID записи (необязательно)
  distinct?: boolean; // Сортировка по возрастанию/убыванию (необязательно)
  sortBy?: string; // Поле для сортировки (необязательно)
}

interface MetricTimeCriteria {
  startTime?: string; // Начало временного диапазона (необязательно)
  endTime?: string; // Конец временного диапазона (необязательно)
  currentTime?: string; // Текущее время (необязательно)
  metricId?: number; // ID метрики (необязательно)
  serverID: number; // ID сервера (обязательно)
}

// Интерфейсы для запросов
interface MetricRequest {
  baseCriteria?: BaseCriteria;
  metricTimeCriteria: MetricTimeCriteria;
}

interface StaticMetricRequest {
  userId: number;
  hostname: string;
  osInfo: string;
  address: string;
  addInfo: string;
  online: boolean;
  cpuModel: string;
  cpuCountCores: number;
  cpuCountCoresPhysical: number;
  minFreq: number;
  maxFreq: number;
}

interface DiskMetricRequest extends MetricRequest {
  device?: string;
  mountpoint?: string;
}

interface DiskIORequest extends MetricRequest {
  driveName?: string;
}

interface GpuMetricRequest extends MetricRequest {
  gpuName?: string;
}

// Интерфейсы для ответов
interface MetricResponse {
  id: number;
  timestamp: string;
  uptime: number | null;
  netSent: number | null;
  netRecv: number | null;
  netErrors: number | null;
  netDrops: number | null;
  failedLogins: number | null;
  activeConnections: number | null;
  diskTotalUsedPercent: number | null;
  diskTotalAvailable: number | null;
}

interface StaticMetricResponse {
  cpuModel: string;
  cpuCountCores: number;
  cpuCountCoresPhysical: number;
  minFreq: number;
  maxFreq: number;
}

interface MemoryMetricResponse {
  id: number;
  memoryTotal: number;
  memoryUsed: number;
  memoryFree: number;
  memoryCached: number;
  memoryUsedPercent: number;
}

interface SwapMetricResponse {
  id: number;
  swapTotal: number;
  swapUsed: number;
  swapFree: number;
  swapPercentUsed: number;
}

interface CpuMetricResponse {
  id: number;
  cpuPercentTotalLoad: number;
  cpuTimeUser: number;
  cpuTimeSystem: number;
  cpuTimeIdle: number;
  cpuTimeInterrupt: number;
  cpuTimeDpc: number;
  ctxSwitches: number;
  interrupts: number;
  softInterrupts: number;
  syscalls: number;
  currentFreq: number;
  cores: { coreIndex: number; corePercentLoad: number }[];
}

interface NetworkConnectionMetricResponse {
  id: number;
  tcp: number;
  udp: number;
}

interface NetInterfaceMetricResponse {
  id: number;
  interfaceName: string | null;
  sent: number;
  recv: number;
  packetsSent: number;
  packetsRecv: number;
  errIn: number;
  errOut: number;
  dropIn: number;
  dropOut: number;
}

interface DiskMetricResponse {
  id: number;
  device: string;
  mountpoint: string;
  diskTotal: number;
  diskUsed: number;
  diskFree: number;
  diskUsedPercent: number;
  timestamp: string;
  serverId: number;
}

interface DiskIOMetricResponse {
  id: number;
  driveName: string;
  readCount: number;
  writeCount: number;
  read: number;
  write: number;
}

interface GpuMetricResponse {
  gpuName: string;
  loadPercent: number;
  memoryTotal: number;
  memoryUsed: number;
  memoryFree: number;
  memoryUsedPercent: number;
  temperature: number;
}

// Класс для работы с метриками
class MetricService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Получение всех метрик
  async getMetrics(request: MetricRequest): Promise<MetricResponse[]> {
    const response = await this.apiClient.post<MetricResponse[]>('/api/metric', request);
    return response.data;
  }

  // Получение статических характеристик сервера
  async getStaticMetrics(request: StaticMetricRequest): Promise<StaticMetricResponse[]> {
    const response = await this.apiClient.post<StaticMetricResponse[]>('/api/metric/static', request);
    return response.data;
  }

  // Получение метрик памяти
  async getMemoryMetrics(request: MetricRequest): Promise<MemoryMetricResponse[]> {
    const response = await this.apiClient.post<MemoryMetricResponse[]>('/api/metric/memory', request);
    return response.data;
  }

  // Получение метрик swap
  async getSwapMetrics(request: MetricRequest): Promise<SwapMetricResponse[]> {
    const response = await this.apiClient.post<SwapMetricResponse[]>('/api/metric/swap', request);
    return response.data;
  }

  // Получение метрик CPU
  async getCpuMetrics(request: MetricRequest): Promise<CpuMetricResponse[]> {
    const response = await this.apiClient.post<CpuMetricResponse[]>('/api/metric/cpu', request);
    return response.data;
  }

  // Получение сетевых соединений
  async getNetworkConnections(request: MetricRequest): Promise<NetworkConnectionMetricResponse[]> {
    const response = await this.apiClient.post<NetworkConnectionMetricResponse[]>(
      '/api/metric/network_connection',
      request
    );
    return response.data;
  }

  // Получение данных сетевых интерфейсов
  async getNetInterfaceMetrics(request: MetricRequest): Promise<NetInterfaceMetricResponse[]> {
    const response = await this.apiClient.post<NetInterfaceMetricResponse[]>('/api/metric/net_interface', request);
    return response.data;
  }

  // Получение данных дисков
  async getDiskMetrics(request: DiskMetricRequest): Promise<Record<string, DiskMetricResponse[]>> {
    const response = await this.apiClient.post<Record<string, DiskMetricResponse[]>>('/api/metric/disks', request);
    return response.data;
  }

  // Получение IO данных дисков
  async getDiskIOMetrics(request: DiskIORequest): Promise<Record<string, DiskIOMetricResponse[]>> {
    const response = await this.apiClient.post<Record<string, DiskIOMetricResponse[]>>(
      '/api/metric/disksIO',
      request
    );
    return response.data;
  }

  // Получение данных GPU
  async getGpuMetrics(request: GpuMetricRequest): Promise<Record<string, GpuMetricResponse[]>> {
    const response = await this.apiClient.post<Record<string, GpuMetricResponse[]>>('/api/metric/gpu', request);
    return response.data;
  }
}

export default MetricService;