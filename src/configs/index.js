import moment from 'moment'
import 'moment/locale/pt-br'
import colors from './colors'
import images from './images'
import metrics from './metrics'
import { serverUri, appVersion, platform, webClientId, http_public_key } from './default-config'

moment.locale('pt-BR')

export {
	serverUri,
	appVersion,
	platform,
	colors,
	metrics,
	images,
	webClientId,
	moment,
	http_public_key
}
