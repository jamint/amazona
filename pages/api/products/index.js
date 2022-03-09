import nc from 'next-connect'
import Product from '../../../models/Product'
import db from '../../../utils/db'

const handler = nc()

handler.get(async (req, res) => {
  await db.connect()
  const products = await Product.find({})
  await db.disconnect()
  res.send(products)
  // res.status(200).json({ name: 'John Doeee' })
})

export default handler
