export const formatPrice = (number: number): string => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(typeof number !== 'number' ? Number(number) / 100 : number / 100)
}
