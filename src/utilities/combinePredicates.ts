export type Predicate<T> = (item: T) => boolean

export default function combinePredicates<T>(...predicates: Predicate<T>[]) {
  return function (item: T) {
    return predicates.map(predicate => predicate(item)).every(result => result)
  }
}
