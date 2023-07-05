import { Ref } from 'vue'
import { PaginationT, ApiResponseT } from '~/types'

export const useApiData = (response: Ref<any>) : ApiResponseT => {
	return {
		data: response.value?.data,
		pagination: response.value?.pagination
	};
}