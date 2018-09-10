import { Message } from 'element-ui'

/**
 * 根据key获取localStorage的值
 * @param {string} name localStorage中存储的key
 * @returns { any } 找到就返回，未找到就返回undefined
 */
export const getStorageItem = (name) => {
  if (!name) return
  const value = window.localStorage.getItem(name)
  return value && value !== 'undefined' && JSON.parse(value)
}

/**
 * 将value以key为键保存到localStorage中
 * @param { string } name 存储到localStorage的key
 * @param { any } value 存储到localStorage的value
 * @returns { void }
 */
export const setStorageItem = (name, value) => {
  if (!name) return
  return window.localStorage.setItem(name, JSON.stringify(value))
}

/**
 * 删除localStorage
 * @param {string} name 删除localStorage中对应的key
 */
export const removeStorageItem = (name) => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

/**
 * 清空localStorage
 */
export const clearStorage = () => window.localStorage.clear()

export const getBeforeDate = (m) => {
  const n = m
  let s = ''
  const d = new Date()
  let year = d.getFullYear()
  let mon = d.getMonth() + 1
  let day = d.getDate()
  if (day <= n) {
    if (mon > 1) {
      mon -= 1
    } else {
      year -= 1
      mon = 12
    }
  }
  d.setDate(d.getDate() - n)
  year = d.getFullYear()
  mon = d.getMonth() + 1
  day = d.getDate()
  s = `${year}-${mon < 10 ? (`0${mon}`) : mon}-${day < 10 ? (`0${day}`) : day}`
  return s
}

export const getQueryString = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null
}

// 检测游览器内核
export const getBrowserType = () => {
  if (navigator.userAgent.indexOf('Trident') !== -1) {
    return 'IE'
  }
  if (navigator.userAgent.indexOf('Presto') !== -1) {
    return 'OPERA'
  }
  if (navigator.userAgent.indexOf('AppleWebKit') !== -1 && navigator.userAgent.indexOf('Chrome') !== -1) {
    return 'WEBKIT'
  }
  if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'FIREFOX'
  }
  if (navigator.userAgent.indexOf('AppleWebKit') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
    return 'SAFARI'
  }
}

export const MessageNotice = (content, type = 'success', callback, showClose = false) => {
  Message({
    message: content,
    type,
    duration: 2000,
    showClose,
    onClose: () => {
      if (typeof callback === 'function') {
        callback()
      }
    }
  })
}
