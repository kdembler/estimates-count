const axios = require('axios')

const TOKEN_URL = 'https://github.com/login/oauth/access_token'
const CLIENT_ID = process.env.ESTIMATES_COUNT_CLIENT_ID
const CLIENT_SECRET = process.env.ESTIMATES_COUNT_CLIENT_SECRET

function createResponse(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

exports.handler = async function (event) {
  let body

  try {
    body = JSON.parse(event.body)
  } catch (e) {
    return createResponse(400, { error: 'Invalid body' })
  }

  const { code, state } = body

  if (!code) {
    return createResponse(400, { error: "Missing 'code' field in body" })
  }

  if (!state) {
    return createResponse(400, { error: "Missing 'state' field in body" })
  }

  const payload = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    state,
  }

  const res = await axios.post(TOKEN_URL, payload, {
    headers: {
      Accept: 'application/json',
    },
  })

  return createResponse(200, res.data)
}
