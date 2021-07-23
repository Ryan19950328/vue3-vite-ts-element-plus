const CI = 'tyb-provider.nucarf.tech'
const QA = 'tyb-provider.nucarf.cn'
const PROD = 'tyb-provider.nucarf.net'

interface IAPIURL {
  ci: string
  qa: string
  prod: string
}

const APIURL: IAPIURL = {
  ci: 'https://tyb.nucarf.tech',
  qa: 'https://tyb.nucarf.cn',
  prod: 'https://tyb.nucarf.net'
}

let baseURL = ''

const hostName: string = location.hostname
switch (hostName) {
  case CI:
    baseURL = APIURL['ci']
    break
  case QA:
    baseURL = APIURL['qa']
    break
  case PROD:
    baseURL = APIURL['prod']
    break
  default:
    baseURL = ''
}

export default baseURL
