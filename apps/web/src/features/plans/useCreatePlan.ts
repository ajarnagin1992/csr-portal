import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPlan } from '../../api/plans.js';
import type { CreatePlanDto } from '@csr-portal/shared';

export function useCreatePlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePlanDto) => createPlan(data),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['plans'] });
    },
  });
}
