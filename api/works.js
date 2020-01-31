const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const rows = Number(req.query.rows) || 10
  const response = await fetch(`https://api.crossref.org/works?rows=${rows}`)
  const data = await response.json()
  return res.json(data.message.items)
}
