export const readString = (key: string) => {
  return new Promise<string | null>(async (resolve, reject) => {
    try {
      const value = localStorage.getItem(key)
      resolve(value)
    } catch (e) {
      reject(e)
    }
  })
}

export const writeString = (key: string, value: string) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      localStorage.setItem(key, value)
      resolve(value)
    } catch (e) {
      reject(e)
    }
  })
}

export const readObject = <T extends object>(key: string) => {
  return new Promise<T | null>((resolve, reject) => {
    readString(key)
      .then((value) => resolve(value ? JSON.parse(value) : null))
      .catch(reject)
  })
}

export const writeObject = (key: string, value: object) => {
  return writeString(key, JSON.stringify(value))
}
