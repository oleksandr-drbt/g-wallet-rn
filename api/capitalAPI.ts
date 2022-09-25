import { CapitalSource } from "../types/capital";

interface CapitalResponse {
  sources: CapitalSource[],
}

export const loadCapitalSources = (): Promise<CapitalResponse> => {
  return new Promise<CapitalResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        sources: [
          {
            id: 0,
            name: 'Cash',
            amount: 3000,
          },
          {
            id: 1,
            name: 'Deposit',
            amount: 2000,
          },
        ],
      });
    }, 2000);
  });
};
