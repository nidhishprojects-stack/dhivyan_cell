const ORDER_SEQ_PREFIX = "orderSeq_";

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function getDateParts(date = new Date()) {
  const yy = pad2(date.getFullYear() % 100);
  const mm = pad2(date.getMonth() + 1);
  const dd = pad2(date.getDate());
  return { yy, mm, dd, key: `${date.getFullYear()}${mm}${dd}` };
}

export function generateOrderId(): string {
  const { yy, mm, dd, key } = getDateParts();
  const storageKey = `${ORDER_SEQ_PREFIX}${key}`;
  const current = Number(localStorage.getItem(storageKey) ?? "0");
  const next = current + 1;
  localStorage.setItem(storageKey, String(next));

  const base = `${yy}${mm}${dd}`;
  if (next === 1) return base;
  return `${base}${pad2(next)}`;
}

export type OrderRecord = {
  orderId: string;
  createdAt: string;
  total: number;
};

const ORDER_HISTORY_KEY = "orderHistory";

export function saveOrderRecord(record: OrderRecord): void {
  const history = getOrderHistory();
  history.unshift(record);
  localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
}

export function getOrderHistory(): OrderRecord[] {
  try {
    const raw = localStorage.getItem(ORDER_HISTORY_KEY);
    return raw ? (JSON.parse(raw) as OrderRecord[]) : [];
  } catch {
    return [];
  }
}
