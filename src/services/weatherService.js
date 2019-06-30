import citiesData from 'mockup/cities.json'
import bgData from 'mockup/bg.json'
import nsData from 'mockup/ns.json'

const resolve = (data, ms = 0) =>
  new Promise(resolve => {
    setTimeout(() => resolve(data), ms)
  })

export default {
  fetchCities() {
    return resolve(citiesData, 500)
  },
  fetchDataByCity(citySlug) {
    let data = null
    switch (citySlug) {
      case 'bg':
        data = bgData
        break
      case 'ns':
        data = nsData
        break
      default:
        break
    }
    return resolve(data, 500)
  }
}
