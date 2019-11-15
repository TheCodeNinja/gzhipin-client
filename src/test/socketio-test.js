import io from 'socket.io-client'

// 得到一個連接服務器的socket对象
const socket = io('ws://localhost:4000')

// 監听該socket連接对象上的event: receiveMsg (來自服務器端)
socket.on('receiveMsg', function(data) { // data: 來自服務器端發送的消息
    console.log('[ Client ]: received message from server: ' + data)
})

// 該socket連接对象向服务器端发送消息
socket.emit('sendMsg', {name: 'Mario', date: Date.now()})
console.log('[ Client ]: sent message to server: ', {name: 'Mario', date: Date.now()})