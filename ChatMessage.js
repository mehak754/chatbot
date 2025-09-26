let messages = []
let messageIdCounter = 1

export class ChatMessage {
  static async create(data) {
    const message = {
      id: `message_${messageIdCounter++}`,
      created_date: new Date().toISOString(),
      created_by: 'user@example.com',
      ...data
    }
    messages.push(message)
    return message
  }

  static async list(orderBy = "-created_date", limit = 100) {
    let sortedMessages = [...messages]
    
    if (orderBy.startsWith('-')) {
      const field = orderBy.substring(1)
      sortedMessages.sort((a, b) => new Date(b[field]) - new Date(a[field]))
    }
    
    return sortedMessages.slice(0, limit)
  }

  static async filter(criteria, orderBy = "-created_date") {
    let filteredMessages = messages.filter(message => {
      return Object.keys(criteria).every(key => message[key] === criteria[key])
    })
    
    if (orderBy.startsWith('-')) {
      const field = orderBy.substring(1)
      filteredMessages.sort((a, b) => new Date(b[field]) - new Date(a[field]))
    }
    
    return filteredMessages
  }
}

export default ChatMessage