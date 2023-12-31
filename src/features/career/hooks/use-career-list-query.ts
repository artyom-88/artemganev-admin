import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { CareerModel } from '@/common/types/common-career-types';
import { careerListRequest } from '@/features/career/career-api';
import { CAREER_LIST_QUERY_KEY } from '@/features/career/career-constants';

export const useCareerListQuery = (
  {
    refetchOnMount = false,
    enabled = false,
    ...restProps
  }: Omit<UseQueryOptions<CareerModel[]>, 'queryKey' | 'queryFn'> = {
    enabled: false,
    refetchOnMount: false,
  }
): UseQueryResult<CareerModel[]> =>
  useQuery<CareerModel[]>({
    ...restProps,
    enabled: enabled,
    queryFn: careerListRequest,
    queryKey: [CAREER_LIST_QUERY_KEY],
    refetchOnMount: refetchOnMount,
  });
