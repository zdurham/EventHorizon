export const getStorage = (item) => {
  const user = localStorage.getItem(item)
  console.log('user', user)
  return user
}