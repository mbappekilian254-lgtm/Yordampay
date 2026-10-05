/**
 * Financial and Date formatting utilities for YordamPay
 */

export function formatUzs(amount: number, options?: { compact?: boolean; symbol?: boolean }): string {
  if (isNaN(amount)) return '0 so‘m';

  if (options?.compact) {
    if (Math.abs(amount) >= 1_000_000_000) {
      return `${(amount / 1_000_000_000).toFixed(2)}B so‘m`;
    }
    if (Math.abs(amount) >= 1_000_000) {
      return `${(amount / 1_000_000).toFixed(1)}M so‘m`;
    }
    if (Math.abs(amount) >= 1_000) {
      return `${(amount / 1_000).toFixed(0)} ming so‘m`;
    }
  }

  // Format with thousand separators: 25 000 000 so'm
  const formatted = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return options?.symbol === false ? formatted : `${formatted} so‘m`;
}

export function formatPercentage(part: number, total: number, decimals: number = 1): number {
  if (!total || total === 0) return 0;
  const p = (part / total) * 100;
  return Number(Math.min(100, Math.max(0, p)).toFixed(decimals));
}

export function calculateMoneyAllocation(
  amount: number,
  budget: { name: string; category: string; plannedAmount: number }[]
) {
  const totalBudget = budget.reduce((sum, item) => sum + item.plannedAmount, 0);
  if (totalBudget === 0) return [];

  let allocatedSum = 0;
  const result = budget.map((item, idx) => {
    const share = item.plannedAmount / totalBudget;
    let allocated = Math.round(amount * share);
    
    // Adjust last element for rounding precision
    if (idx === budget.length - 1) {
      allocated = amount - allocatedSum;
    } else {
      allocatedSum += allocated;
    }

    return {
      name: item.name,
      category: item.category,
      plannedAmount: item.plannedAmount,
      allocatedAmount: allocated,
      percentage: Number((share * 100).toFixed(1))
    };
  });

  return result;
}
