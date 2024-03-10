import { computed, type Ref } from 'vue'
import combinePredicates, { type Predicate } from '@/utilities/combinePredicates'

export default function useFilteredArray<T>(array: Ref<T[]>, predicates: Predicate<T>[]) {
  const filteredArray = computed(() => array.value.filter(combinePredicates(...predicates)))

  return { filteredArray }
}
