import packageJson from '../../package.json'

const appVersion = packageJson.version
const platform = 'JavaWeb'
const webClientId = 'project-905217688863'
const serverUri = process.env.REACT_APP_API_URL

const http_public_key =
	'-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgPiyql0hrNEXR3/orHqx5g756IcX9ReZX8WQIF7hIB67OH6No1XDLx/tc4DWmVaBfy9GN9WkWNp7mxvUMf6c3mugcMme+4UTTt704lygIFDO+VjpclisIAL1tI+IjQ14mBK/On6pvGL57pAfqi9kh+3OsJLfsp3bYTPjMr/P+FHEx4/c2v+jQPps8lOsu07WnB8aLm/6E32xST/wRMTZYpRfm4LDyN9STmka0e/s9JoQnBAo72MTmfMlyE5nRDxs4J/shdhHdSw+arKR2FYpKWNk2FHT35+ADh0uO/hjupGWS8DXGG5fw8m8SnNgezeqDXZ2ypHABqsHcqqoWDwHcwIDAQAB-----END PUBLIC KEY-----'

const systemColors = {
	primary: '#5A425C',
	secondary: '#EDA064',
	ascendent: '#FBF9FB'
}

export { appVersion, serverUri, platform, systemColors, webClientId, http_public_key }
