import bgData from 'mockup/bg.json'
import nsData from 'mockup/ns.json'

export default {
  fetchDataByCity(citySlug) {
    let data = null
    switch (citySlug) {
      case 'bg':
        data = bgData
        break;
      case 'ns':
        data = nsData
        break;
      default:
        break;
    }
    return Promise.resolve(data)
  }
}
