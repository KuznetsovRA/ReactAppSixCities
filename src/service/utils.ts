export function ratingToWidth (rating:number):string {
  return Math.floor(rating*100/5)+"%"
}
