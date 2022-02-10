const userIds = ['U01', 'U02', 'U03', 'U04']
const orderIds = ['T01', 'T02', 'T03', 'T04']

const userOrder = [
    {userId: 'U01', orderIds:['T01', 'T02']},
    {userId: 'U02', orderIds:[]},
    {userId: 'U03', orderIds:['T03']}
]

const userData = {
    'U01': 'Tom',
    'U02': 'Sam',
    'U03': 'Jhon'
}

const orderData = {						
    'T01': { name: 'A', price: 499 }, 
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 }, 
    'T04': { name: 'D', price: 799 }
} 

console.log('result =',
  // user
  userOrder.map(item => {
      const obj = {}
      obj.user = {
          id: item.userId,
          name: userData[item.userId]
      }
      // order
      obj.orders = item.orderIds.map(orderId => {
          orderData[orderId].id = orderId
          return JSON.stringify(orderData[orderId])
      })
      return obj
  })
)


// 要：
// const result = [ 
//      {
//         user: { 
//             id: 'U01',
//             name: 'Tom'
//         }, 
//         orders: [
//             { id: 'T01', name: 'A', price: 499 },
//             { id: 'T02', name: 'B', price: 599 }, 
//         ],
//     },
// ]
